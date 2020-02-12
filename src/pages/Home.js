import React from "react";
import endurance from '../images/leghops.gif';
import endurCrd from '../images/endurCard.gif';
import strength from '../images/strenCrd.png';
import flexability from '../images/flexCrd.png';

import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <div className="topic">

        <div className="item">

          <img src={endurCrd} alt='endurance' />
          <Link to='/endurance'>
          <button className="overlay">
            Enderance Training</button>
          </Link>

        </div>

        {/* gif immage for homepage routing */}
        <div className="item">
          <img src={strength} alt='strength' />
          <Link to='/strength'>
          <button className="overlay">Strength Training</button></Link>
        </div>
        <div className="item">
          <img src={flexability} alt='flexability' />
          <Link to='/flexability'>
          <button className="overlay">Flexabiltity Training</button></Link>
        </div>
      </div>
      <div className="topic">
        <div className="item">
          <img src={endurance} alt='10min routine' />
          <Link to='/10minWo'>
          <button className="overlay">10min Training</button></Link>
        </div>
        <div className="item">
          <img src={endurance} alt='20min routine' />
          <div className="overlay">20min Training</div>
        </div>
        <div className="item">
          <img src={endurance} alt='40min routine' />
          <div className="overlay">40min Training</div>
        </div>
      </div>

    </div>
  );
}

export default Home;