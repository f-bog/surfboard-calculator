import React from 'react';

import Calculator from './components/Calculator';
import './App.css';
import surfboard from './images/surfboard-icon.png';

function App() {
  return (
    <div className='App'>
      <Calculator />
      <div className='box'>
        <img
          src={surfboard}
          alt='surfboard'
          width='150px;'
          height='150px;'
        ></img>
      </div>
    </div>
  );
}

export default App;
