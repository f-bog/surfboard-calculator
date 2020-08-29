import React from 'react';

const RadioButton = (props) => {
  return (
    <label>
      {props.value.toUpperCase()}
      <input
        className='button'
        name='skill'
        type='radio'
        value={props.value}
        onClick={props.handler}
      ></input>
    </label>
  );
};

export default RadioButton;
