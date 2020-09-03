import React, { useState } from 'react';
import surfboard from '../images/surfboard-icon.png';
import RangeSlider from './RangeSlider';
import SkillButton from './SkillButton';
import './Calculator.css';

function Calculator() {
  const [weight, setWeight] = useState(50);
  const [gf, setGf] = useState('0.43');
  const [skill, setSkill] = useState('Beginner');
  const beginner = 0.43;
  const intermediate = 0.38;
  const expert = 0.36;

  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleButton = (event) => {
    let newSkill = event.target.value;
    setSkill(newSkill[0].toUpperCase() + newSkill.slice(1));
    if (event.target.value === 'beginner') {
      setGf(beginner);
    } else if (event.target.value === 'intermediate') {
      setGf(intermediate);
    } else if (event.target.value === 'expert') {
      setGf(expert);
    }
  };

  return (
    <div className='Calculator'>
      <div className='Calculator-details'>
        <h2>BOARD VOLUME: {(weight * gf).toFixed(1) + 'L'}</h2>
        <p>YOUR WEIGHT: {weight + 'kg'}</p>
        <p>YOUR SKILL: {skill}</p>
      </div>
      <img src={surfboard} alt='surfboard' width='100px;' height='100px;'></img>
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
