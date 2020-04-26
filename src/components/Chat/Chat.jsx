import React, { useState, useRef, useEffect } from 'react';
// components
import ChatMessage from './components/ChatMessage';
// utils
import cn from 'classnames';
// styles
import './Chat.css';

// message behavior keys
const NEXT_QUESTION = 'NEXT_QUESTION';
const NEXT_WITH_SKIP = 'NEXT_WITH_SKIP';
const ADDITIONAL_QUESTION = 'ADDITIONAL_QUESTION';

import data from './mock';

const {
  name,
  messages,
  organization: fakeOrg,
} = data;

const LoadDots = () => (
  <div className="load-dots">
    <div className="dot"/>
    <div className="dot"/>
    <div className="dot"/>
  </div>
)

const Chat = ({
  className,
  chatScript = messages,
  fullName = name,
  organization = fakeOrg,
}) => {
  const [messageQueue, setMessageQueue] = useState([]);
  const [replies, setReplies] = useState([]);
  const [currentMessageIdx, setCurrentMessageIdx] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const endMessageAnchor = useRef(null);
  let messageTimeout = null;

  useEffect(() => {
    endMessageAnchor.current && endMessageAnchor.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [isTyping, messageQueue, endMessageAnchor]);

  useEffect(() => {
    if (chatScript && chatScript.length) {
        setIsTyping(true);
        sendMessage(chatScript[currentMessageIdx]);
    }
  }, [chatScript, sendMessage, currentMessageIdx]);

  useEffect(() => {
    return () => {
      clearTimeout(messageTimeout)
    }
  }, [messageTimeout])

  const typeMessage = (message, isReply = false) => {
      isReply && setMessageQueue(prev => ([...prev, { ...message, isReply}]));
      messageTimeout = setTimeout(() => {
      !isReply && setMessageQueue(prev => ([...prev, { ...message, isReply}]))
      if (message.replies && message.replies.length) {
        setReplies(message.replies);
        setIsTyping(false)
      }
      if (message.additionalMessage) {
        setIsTyping(true)
        return typeMessage(message.additionalMessage);
      }
      if (!isReply && !message.additionalMessage && !message.replies) {
        setIsTyping(false)
      }
    }, 1000);
  }

  const sendMessage = (message) => {
    switch (message.action) {
      case NEXT_WITH_SKIP:
        typeMessage(message, true);
        setCurrentMessageIdx(currentMessageIdx + 2);
        setReplies([])
        return;
      case NEXT_QUESTION:
        typeMessage(message, true);
        setCurrentMessageIdx(currentMessageIdx + 1);
        setReplies([])
        return;
      case ADDITIONAL_QUESTION:
        setIsTyping(true)
        typeMessage(message);
        setReplies([])
        return;
      default:
        setIsTyping(true)
        typeMessage(message);
        setReplies([])
        return;
    }
  };

  return (
    <div className={cn('Chat', className)}>
      <div className="header">
        <div className="avatar" />
        <div className="info-wrapper">
          <div className="name">{fullName}</div>
          <div className="organization">{organization}</div>
        </div>
      </div>
      <div className="body">
        {messageQueue.map(({ text, isReply, id }, idx, itself) => {
          const isNotLast = !isReply && itself[idx + 1] && itself[idx + 1].isReply !== true
          return ( 
              <div key={id} className="message-wrap">
                <div className="avatar-col">
                  {!isReply && !isNotLast && (
                      <div className="avatar" />
                  )}
                </div>
                <ChatMessage message={text} withSound={!isReply} isReply={isReply} />
              </div>
          );
        })}
        {isTyping && (
          <div className="message-wrap">
          <div className="avatar-col">
            <div className="avatar" />
          </div>
            <ChatMessage message={<LoadDots />} />
          </div>
        )}
        <div ref={endMessageAnchor} />
      </div>
      <div className={cn('replies')}>
        {replies.map((reply) => (
          <div key={reply.id} className="reply-button" onClick={() => sendMessage(reply)}>
            {reply.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
