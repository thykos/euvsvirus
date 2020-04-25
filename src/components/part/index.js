import React from 'react';
import PropTypes from 'prop-types';
import Hero from './hero';
import Quote from './quote';
import Text from './text';
import ImageWithText from './imageWithText';
import './style.css';

const Part = ({ part }) => {
  const components = {
    hero: Hero,
    quote: Quote,
    text: Text,
    imageWithText: ImageWithText
  };

  return (
    <div className="part-wrapper">
      { React.createElement(components[part.type], { part }) }
    </div>
  )
};

Part.propTypes = {
  part: PropTypes.object.isRequired
};

export default Part;
