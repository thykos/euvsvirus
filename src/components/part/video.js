import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Video = ({ part }) => {
  return (
    <div className="video-wrapper">
      <iframe
        width="100%" height="500" src={part.data.src} frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen/>
    </div>
  )
};

Video.propTypes = {
  part: PropTypes.object.isRequired
};

export default Video;
