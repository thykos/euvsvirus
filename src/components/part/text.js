import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Text = ({ part }) => {
  return (
    <div className="text-wrapper">
      {part.data.title ? <div className="title">{part.data.title}</div> : null}
      <div className="content">{part.data.content}</div>
    </div>
  )
};

Text.propTypes = {
  part: PropTypes.object.isRequired
};

export default Text;
