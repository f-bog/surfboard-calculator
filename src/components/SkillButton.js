import React from 'react';

const SkillButton = (props) => {
  return (
    <label>
      <input
        className='button'
        name='skill'
        type='radio'
        value={props.value}
        onClick={props.handler}
      ></input>
      {props.value}
    </label>
  );
};

export default SkillButton;
