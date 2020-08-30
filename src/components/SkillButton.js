import React from 'react';

const SkillButton = (props) => {
  return (
    <label>
      <input
        className='button'
        name='skill'
        type='button'
        value={props.value}
        onClick={props.handler}
      ></input>
    </label>
  );
};

export default SkillButton;
