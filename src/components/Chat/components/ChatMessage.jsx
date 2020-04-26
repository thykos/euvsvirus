import React, { useEffect } from 'react';
// utils
import cn from 'classnames';
import useSound from 'use-sound';
// assets
import BEEP from '../gods-sound.mp3';
// styles
import './ChatMessage.css';

const ChatMessage = ({
  message,
  isReply = false,
  withSound = false,
}) => {
  const [play] = useSound(BEEP);

  useEffect(() => {
    !isReply && withSound && play();
  }, [play, isReply])

  return (
    <div className={cn('ChatMessage', { isReply })}>{message}</div>
  );
};

export default ChatMessage;
