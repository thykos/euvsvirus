import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Text = ({ part }) => {
  return (
    <div className="text-wrapper">
      <div className="title">{part.data.title}</div>
      <div className="content">{part.data.content}</div>
    </div>
  )
};

Text.propTypes = {
  part: PropTypes.object.isRequired
};

export default Text;
