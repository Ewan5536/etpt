import React from 'react';
import logo from './images/fit1.jpg';
import './App.css';

function App() {
  return (
    <div className="App">
     
        <img src={logo} className="App-header" alt="logo" />
        <p>
         welcome to Ewan Thomas PT
        </p>
        <div className="topic">
          <div className="item">Flexability</div>
          <div className="item">Strength</div>
          <div className="item">Endurance</div>
        </div>
        <div className="topic">
          <div className="item">10min routine</div>
          <div className="item">20min routine</div>
          <div className="item">40min routine</div>
        </div>
        <br /><br /><br />
      <div></div>
    </div>
  );
}

export default App;
