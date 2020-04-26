import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import Radio from '../radio';
import './style.css';


const QuestionWithComment = ({ part, sectionId, progress, onAnswer }) => {
  const initialValue = get(progress.answers, `${sectionId}[${part.id}]`, {
    value: null,
    comment: ''
  });
  const [ answer, onAnswerChange ] = useState(initialValue);

  const onChange = (field) => onAnswerChange({...answer, ...field});

  const onSubmit = (event) => {
    event.preventDefault();
    onAnswer({
      partId: part.id,
      sectionId: sectionId,
      answer
    });
  };

  return (
    <div className="qwc-wrapper">
      <form onSubmit={onSubmit}>
        <div className="title">{part.data.title}</div>
        <div className="radios">
          {part.data.options.map((item, idx) => (
            <Radio
              key={idx}
              label={item.label}
              value={item.value}
              checked={answer.value === item.value}
              onChange={() => onChange({value: item.value})}
            />
          ))}
        </div>
        <div className="comment-title">{part.data.commentTitle}</div>
        <textarea className="textarea qwc-textarea" cols="30" rows="10" value={answer.comment} onChange={(event) => onChange({comment: event.target.value})}/>
        <div className="btns-wrapper">
          <button className="btn outline">Send</button>
        </div>
      </form>
    </div>
  )
};

QuestionWithComment.propTypes = {
  part: PropTypes.object.isRequired,
  progress: PropTypes.object.isRequired,
  sectionId: PropTypes.number.isRequired,
  onAnswer: PropTypes.func.isRequired,
};

export default QuestionWithComment;
