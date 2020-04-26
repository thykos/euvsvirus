import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const Preview = ({ item }) => {
  const startTimer = () => {
    if (!localStorage.getItem('timer'))
    localStorage.setItem('timer', new Date().getTime())
  };

  return (
    <div className="preview-wrapper">
      <div className="title">{item.title}</div>
      <div className="subtitle">{item.subtitle}</div>
      <div className="img-wrapper">
        <img src={item.img} alt={item.title}/>
      </div>
      <div className="btns-wrapper">
        <Link to={`/section/${item.sections[0].id}`}>
          <button className="btn big" onClick={startTimer}>Start</button>
        </Link>
      </div>
    </div>
  )
};

Preview.propTypes = {
  item: PropTypes.object.isRequired
};

export default Preview;
