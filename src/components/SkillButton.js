import React from 'react';
import './SkillButton.css';
const SkillButton = (props) => {
  return (
    <label>
      <input
        className='SkillButton'
        name='skill'
        type='radio'
        value={props.value}
        onClick={props.handler}
        checked={true}
      ></input>
      {props.value.toUpperCase()}
    </label>
  );
};

export default SkillButton;
