import React from "react";
import endurance from '../images/endurCard.gif';
import { Link } from 'react-router-dom';

function Endurance() {

    return (
        <div>
            <div className="topic">
                <div className="item">


                    <img src={endurance} alt='endurance' />

                    <button className="overlay">
                        ddhdhdhd dhdhdhdh dhdhdhd hdhdhdh dhdhdh dhh
            <br />gdgdgdgdgdgdgdg gdgdgd gdgdgd ggdg
            <br />dhdhdhhdhd
            </button>
                </div>
                {/* routing from homepage */}
                <div className="item">


                    <img src={endurance} alt='endurance' />

                    <button className="overlay">
                        ddhdhdhd dhdhdhdh dhdhdhd hdhdhdh dhdhdh dhh
                            <br />gdgdgdgdgdgdgdg gdgdgd gdgdgd ggdg
                            <br />dhdhdhhdhd
                            </button>
                </div>
            </div>
            <div className="topic">

                <div className="item">

                    <img src={endurance} alt='endurance' />
                        <button className="overlay">
                            ddhdhdhd dhdhdhdh dhdhdhd hdhdhdh dhdhdh dhh
                            <br />gdgdgdgdgdgdgdg gdgdgd gdgdgd ggdg
                            <br />dhdhdhhdhd
                            </button>

                </div>
                <div className="item">

                    <img src={endurance} alt='endurance' />
                        <button className="overlay">
                            ddhdhdhd dhdhdhdh dhdhdhd hdhdhdh dhdhdh dhh
                            <br />gdgdgdgdgdgdgdg gdgdgd gdgdgd ggdg
                            <br />dhdhdhhdhd
                            </button>

                </div>
            </div>
        </div>
    )
}

export default Endurance;