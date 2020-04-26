import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Title = ({ part }) => {
  return (
    <div className="title-wrapper">
      <h1 className="title">{part.data.title}</h1>
      {part.data.subtitle ? <h2 className="subtitle">{part.data.subtitle}</h2> : null}
      {part.data.img ? <img src={part.data.img} alt={part.data.title}/> : null}
    </div>
  )
};

Title.propTypes = {
  part: PropTypes.object.isRequired
};

export default Title;
