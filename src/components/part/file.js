import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import './style.css';

const types = {
  pdf: faFilePdf
};

const file = ({ part }) => {
  return (
    <div className="file-wrapper">
      {part.data.title ? <div className="title">{part.data.title}</div> : null}
      <div className="file">
        <a href={part.data.url} download={part.data.url} target="_blank">
          <FontAwesomeIcon icon={types[part.data.type]} size="3x" className="file-icon"/>
          <span className="filename">{part.data.filename}</span>
        </a>
      </div>
    </div>
  )
};

file.propTypes = {
  part: PropTypes.object.isRequired
};

export default file;
