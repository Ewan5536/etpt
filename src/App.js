import React from 'react';
import logo from './images/fit1.jpg';
import endur from './images/endurPic.png';
import flexa from './images/flexPic.png';
import stren from './images/strenPic.png';
import smlPic from './images/smallVidPic.png';
import medPic from './images/medVidPic.png';
import lrgPic from './images/lrgVidPic.png';

import './App.css';

function App() {
  return (
    <div className="App">

      <img src={logo} className="App-header" alt="logo" />
      <p>
        welcome to Ewan Thomas PT
        </p>
        {/* image tiles */}
      <div className="topic">
        <div className="item"><img src={endur} alt='endurance' /></div>
        <div className="item"><img src={stren} alt='strength' /></div>
        <div className="item"><img src={flexa} alt='flexability' /></div>
      </div>
      <div className="topic">
        <div className="item"><img src={smlPic} alt='10min routine' /></div>
        <div className="item"><img src={medPic} alt='20min routine' /></div>
        <div className="item"><img src={lrgPic} alt='40min routine' /></div>
      </div>
      <br /><br /><br />
      <div></div>
    </div>
  );
}

export default App;
