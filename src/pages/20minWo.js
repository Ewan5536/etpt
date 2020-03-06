import React from "react";
import "../App.css";
import shrugs from "../images/shruglateralarm.gif"
import str_leg from "../images/StraightLegsit-up.gif"
import jumps from "../images/squatjump.gif"
import bends from "../images/sideBends.gif"

function Workout20 () {
    return (
        <>
            <div>
                <div className="topic">
                    <div className="item"><img src={shrugs} alt='short sit ups ' />
                        <div className="overlay">
                            <div className='overlayText'>
                                        floor.
                            </div>
                                    {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                        </div>
                </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={str_leg} alt='twist sit ups' />
                        <div className="overlay">
                            <div className='overlayText'>
                                    motion.
                            </div>
                                {/* https://www.youtube.com/watch?v=SKPab2YC8BE&feature=emb_title */}
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="topic">
                    <div className="item"><img src={jumps} alt='short sit ups ' />
                        <div className="overlay">
                            <div className='overlayText'>
                                        floor.
                            </div>
                                    {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                        </div>
                </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={bends} alt='twist sit ups' />
                        <div className="overlay">
                            <div className='overlayText'>
                                    motion.
                            </div>
                                {/* https://www.youtube.com/watch?v=SKPab2YC8BE&feature=emb_title */}
                        </div>
                    </div>
                </div>
            </div>



        </>
    )
}
export default Workout20 ;