import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const Quote = ({ part }) => {
  return (
    <div className="quote-wrapper">
        <div className="quote">
        <div className="icon"><FontAwesomeIcon size="3x" icon={faQuoteRight}/></div>
        <div className="data-wrapper">
          <div>{part.data.content}</div>
          <div className="author">
            <img src={part.data.author.avatar} alt={part.data.author.name}/>
            <strong>{part.data.author.name},</strong> <span>{part.data.author.info}</span>
          </div>
        </div>
      </div>
    </div>
  )
};

Quote.propTypes = {
  part: PropTypes.object.isRequired
};

export default Quote;
