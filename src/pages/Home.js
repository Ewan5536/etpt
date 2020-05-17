import React from "react";
import work10 from '../images/work10.png';
import work20 from '../images/work20.png';
import work40 from '../images/work40.png';
import endurCrd from '../images/endurCard.gif';
import strength from '../images/strenCrd.png';
import flexability from '../images/flexCrd.png';
/*import images*/
import { Link } from 'react-router-dom'

function Home () {
  return (
    <div>
      <div className="topic">
        <div className="item">
          <Link to='/endurance'>
          <img src={endurCrd} alt='endurance' />
          <button className="overlay">
            Enderance Training</button>
          </Link>
        </div>

        {/* gif image perform routing */}
        <div className="item">
          <Link to='/strength'>
          <img src={strength} alt='strength' />
          <button className="overlay">Start Strength Training</button></Link>
        </div>
        <div className="item">
          <Link to='/flexability'>
          <img src={flexability} alt='flexability' />
          <button className="overlay">Start Flexabiltity Training</button></Link>
        </div>
      </div>
      <div className="topic">
        <div className="item">
          <Link to='/10minWo'>
          <img src={work10} alt='10min routine' />
          <button className="overlay">Start 10min Training</button></Link>
        </div>
        <div className="item">
          <Link to='/20minWo'>
          <img src={work20} alt='20min routine' />
          <button className="overlay">Start 20min Training</button></Link>
        </div>
        <div className="item">
          <Link to='/40minWo'>
          <img src={work40} alt='40min routine' />
          <button className="overlay">Start 40min Training</button></Link>
        </div>
      </div>

    </div>
  );
}

export default Home;