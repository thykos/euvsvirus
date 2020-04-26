import React from 'react';
import './style.css';

const Radio = (props) => {
  const { value, label, onChange, checked } = props;
  return (
    <div className="radio-wrapper">
      <label>
        <input type="radio" onChange={() => onChange(value)} value={value} checked={checked}/>
        <span className="dot"/>
        <span className="radio-text">{label}</span>
      </label>
    </div>
  );
};

export default Radio;
