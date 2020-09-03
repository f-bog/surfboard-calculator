import React from 'react';
import './RangeSlider.css';
const RangeSlider = (props) => {
  return (
    <label>
      <input
        className='RangeSlider'
        min='40'
        max='110'
        type='range'
        value={props.value}
        onChange={props.handler}
      ></input>
    </label>
  );
};

export default RangeSlider;
