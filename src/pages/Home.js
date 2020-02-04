import React from "react";
import endurance from '../images/leghops.gif';
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
      <div className="topic">

        <div className="item">

          <img src={endurance} alt='endurance' />
          <Link to='/endurance'>
          <button className="overlay">
            Enderance Training</button>
          </Link>

        </div>

        {/* gif immage for homepage routing */}
        <div className="item">
          <img src={endurance} alt='strength' />
          <div className="overlay">Strength Training</div>
        </div>
        <div className="item">
          <img src={endurance} alt='flexability' />
          <div className="overlay">Flexabiltity Training</div>
        </div>
      </div>
      <div className="topic">
        <div className="item">
          <img src={endurance} alt='10min routine' />
          <div className="overlay">10min Training</div>
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