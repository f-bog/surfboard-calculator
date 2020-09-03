import React, { useState } from 'react';
import surfboard from '../images/surfboard-icon.png';
import RangeSlider from './RangeSlider';
import SkillButton from './SkillButton';
import './Calculator.css';

function Calculator() {
  const [weight, setWeight] = useState(50);
  const [guildFactor, setGuildFactor] = useState(0.43);
  const [skill, setSkill] = useState('Beginner');
  const beginner = 0.43;
  const intermediate = 0.38;
  const expert = 0.36;

  const handleWeight = (event) => {
    setWeight(event.target.value);
  };

  const handleButton = (event) => {
    let newSkill = event.target.value;
    console.log(guildFactor);
    setSkill(newSkill[0].toUpperCase() + newSkill.slice(1));
    if (event.target.value === 'beginner') {
      setGuildFactor(beginner);
    } else if (event.target.value === 'intermediate') {
      setGuildFactor(intermediate);
    } else if (event.target.value === 'expert') {
      setGuildFactor(expert);
    }
  };

  return (
    <div className='Calculator'>
      <div className='Calculator-details'>
        <h2>BOARD VOLUME: {(weight * guildFactor).toFixed(1) + 'L'}</h2>
        <p>YOUR WEIGHT: {weight + 'kg'}</p>
        <p>YOUR SKILL: {skill}</p>
      </div>
      <img src={surfboard} alt='surfboard' width='100px;' height='100px;'></img>
      <div className='Calculator-controls'>
        <RangeSlider value={weight} handler={handleWeight} />
        <SkillButton
          value='beginner'
          handler={handleButton}
          selected={skill === 'Beginner'}
        />
        <SkillButton
          value='intermediate'
          handler={handleButton}
          selected={skill === 'Intermediate'}
        />
        <SkillButton
          value='expert'
          handler={handleButton}
          selected={skill === 'Expert'}
        />
      </div>
    </div>
  );
}

export default Calculator;
