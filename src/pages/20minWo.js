import React from "react";
import "../App.css";
import shrugs from "../images/shruglateralarm.gif"
import str_leg from "../images/StraightLegsit-up.gif"
import jumps from "../images/squatjump.gif"
import bends from "../images/sideBends.gif"
import Timer from "react-compound-timer"


function Workout20 () {
    return (
        <>
         <div>
        <Timer initialTime={1200000} direction="backward" startImmediately={false}  >
                {({ start, pause, reset }) => (
                    <>
                        <div>
                            <Timer.Minutes /> minutes 
                        </div>
                        <div>
                            <Timer.Seconds /> seconds 
                        </div>
                        {/* use state (explain state in write up) to render timer from imported react libary (compound timer) */}


                            <br />

                        <div>
                            <button className="timer_button" onClick={start}>Resume</button>
                            <button className="timer_button" onClick={pause}>Pause</button>
                            <button className="timer_button" onClick={reset}>Reset</button>
                        </div>

                    </>
                )}

            </Timer>

        </div>
            <br />
            <div>
                <div className="topic">
                    <div className="item"><img src={shrugs} alt='short sit ups ' />
                        <div className="overlay">
                            <div className='overlayText'>
                            SET-UP: With a neutral spine and bracing through the core, raise your arms straight out to your sides until they are parallel to the floor. 
                            Your body will look like a 'T' from the front. 
                            LIFT: Initiate the movement by contracting your traps, raising your shoulders and arms upwards. 
                            Hold the position at the top for the prescribed time, maintaining tension and contracting through the traps.
                            </div>
                                    {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                        </div>
                </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={str_leg} alt='twist sit ups' />
                        <div className="overlay">
                            <div className='overlayText'>
                            SET-UP: Start by lying on your back with knees bent. 
                            Raise your off-leg up and straighten it in line with your other thigh. 
                            MOVEMENT: Pressing through your heel and firing your glutes, lift your hips off the floor. 
                            Your weight should rest on your heel and your upper back - not your toes or your neck and cervical spine. 
                            Extend your hips until they form a straight line with your knees and shoulders. 
                            Make sure the end range of motion comes from the hips - squeezing the glutes together at the top of the movement - and not from lumbar hyperextension.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="topic">
                    <div className="item"><img src={jumps} alt='short sit ups ' />
                        <div className="overlay">
                            <div className='overlayText'>
                            MOVEMENT: With an unloaded or lightly loaded barbell squat halfway to parallel and quickly jump up. 
                            Land on your toes and descend again to the same depth, quickly and rhythmically reversing the motion.
                            </div>
                                    {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                        </div>
                </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={bends} alt='twist sit ups' />
                        <div className="overlay">
                            <div className='overlayText'>
                            Lay, back down, on the floor with your head and shoulders raised looking between your legs. 
                            Knees should be bent with the soles of the feet flat on the floor. 
                            Alternate touching each ankle with your hands by moving from side to side keeping your head and shoulders raised off the floor.
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