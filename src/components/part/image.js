import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Image = ({ part }) => {
  return (
    <div className="image-wrapper">
      <img src={part.data.src}/>
    </div>
  )
};

Image.propTypes = {
  part: PropTypes.object.isRequired
};

export default Image;
