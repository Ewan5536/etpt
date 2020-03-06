import React from "react";
import "../App.css";
import situps from "../images/SitUps.gif"
import bridge from "../images/SupineBridge.gif"


function Workout10 () {
    return (
        <>
            <div>
                <div className="topic">
                    <div className="item"><img src={situps} alt='short sit ups ' />
                        <div className="overlay">
                            <div className='overlayText'>
                                floor.
                            </div>
                            {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                        </div>
                    </div>
                    {/* routing from homepage */}
                    <div className="item"><img src={bridge} alt='twist sit ups' />
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
export default Workout10 ;