import React, { useState } from 'react';

import RangeSlider from './RangeSlider';
import SkillButton from './SkillButton';

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
    <div className='controls'>
      <h2>Volume: {(weight * skill).toFixed(2) + 'L'}</h2>
      <h4>Weight: {weight + 'kg'}</h4>
      <RangeSlider value={weight} handler={handleWeight} min='40' />
      <SkillButton value='beginner' handler={handleButton} />
      <SkillButton value='intermediate' handler={handleButton} />
      <SkillButton value='expert' handler={handleButton} />
    </div>
  );
}

export default Calculator;
