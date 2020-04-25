import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import './style.css';

const ImageWithText = ({ part }) => {
  return (
    <div className={cx('image-with-text-wrapper', part.data.position)}>
      <div className="img-wrapper"><img src={part.data.img}/></div>
      <div className="content">{part.data.content}</div>
    </div>
  )
};

ImageWithText.propTypes = {
  part: PropTypes.object.isRequired
};

export default ImageWithText;
