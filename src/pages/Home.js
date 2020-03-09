import React from "react";
import work10 from '../images/work10.png';
import work20 from '../images/work20.png';
import work40 from '../images/work40.png';
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
          <img src={work10} alt='10min routine' />
          <Link to='/10minWo'>
          <button className="overlay">10min Training</button></Link>
        </div>
        <div className="item">
          <img src={work20} alt='20min routine' />
          <Link to='/20minWo'>
          <button className="overlay">20min Training</button></Link>
        </div>
        <div className="item">
          <img src={work40} alt='40min routine' />
          <Link to='/40minWo'>
          <button className="overlay">40min Training</button></Link>
        </div>
      </div>

    </div>
  );
}

export default Home;