import React from 'react';
import './RangeSlider.css';
const RangeSlider = (props) => {
  return (
    <input
      className='range-slider'
      min='40'
      max='110'
      type='range'
      value={props.value}
      onChange={props.handler}
    ></input>
  );
};

export default RangeSlider;
