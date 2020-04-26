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
          {part.data.contents.map((item, idx) => (
            <div className="data-content" key={idx}>
              <div>{item.content}</div>
              <div className="author">
                <img src={item.author.avatar} alt={item.author.name}/>
                <strong>{item.author.name},</strong> <span>{item.author.info}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

Quote.propTypes = {
  part: PropTypes.object.isRequired
};

export default Quote;
