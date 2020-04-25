import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Hero = ({ part }) => {
  return (
    <div className="hero-wrapper" style={{backgroundImage: `url(${part.data.img})`}}>
      <div className="hero">
        <div className="caption">{part.data.caption}</div>
        <div className="title">{part.data.title}</div>
        <div className="subtitle">{part.data.subtitle}</div>
      </div>
    </div>
  )
};

Hero.propTypes = {
  part: PropTypes.object.isRequired
};

export default Hero;
