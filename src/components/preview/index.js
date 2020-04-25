import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './style.css';

const Preview = ({ item }) => {
  return (
    <div className="preview-wrapper">
      <div className="author">
        <span>{item.author.name}</span>
        <span>{item.author.site}</span>
      </div>
      <div className="title">{item.title}</div>
      <div className="subtitle">{item.subtitle}</div>
      <div className="img-wrapper">
        <img src={item.img} alt={item.title}/>
      </div>
      <div className="btns-wrapper">
        <Link to={`/section/${item.sections[0].id}`}>
          <button className="btn big">Start</button>
        </Link>
      </div>
    </div>
  )
};

Preview.propTypes = {
  item: PropTypes.object.isRequired
};

export default Preview;
