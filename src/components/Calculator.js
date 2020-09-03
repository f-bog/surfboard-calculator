import React, { useState } from 'react';
import surfboard from '../images/surfboard-icon.png';
import RangeSlider from './RangeSlider';
import SkillButton from './SkillButton';
import './Calculator.css';

function Calculator() {
  const [weight, setWeight] = useState(50);
  const [skill, setSkill] = useState(0.43);
  const beginner = 0.43;
  const intermediate = 0.38;
  const expert = 0.36;

  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleButton = (event) => {
    if (event.target.value === 'beginner') {
      setSkill(beginner);
    } else if (event.target.value === 'intermediate') {
      setSkill(intermediate);
    } else if (event.target.value === 'expert') {
      setSkill(expert);
    }
  };

  return (
    <div className='Calculator'>
      <div className='Calculator-details'>
        <h2>BOARD VOLUME: {(weight * skill).toFixed(1) + 'L'}</h2>
        <p>YOUR WEIGHT: {weight + 'kg'}</p>
      </div>
      <img src={surfboard} alt='surfboard' width='70px;' height='70px;'></img>
      <div className='Calculator-controls'>
        <RangeSlider value={weight} handler={handleWeight} />
        <SkillButton value='beginner' handler={handleButton} />
        <SkillButton value='intermediate' handler={handleButton} />
        <SkillButton value='expert' handler={handleButton} />
      </div>
    </div>
  );
}

export default Calculator;
