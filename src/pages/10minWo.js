import React from "react";
import "../App.css";
import situps from "../images/SitUps.gif"
import bridge from "../images/SupineBridge.gif"
import Timer from "react-compound-timer"

function Workout10() {
    return (
        <>
        <div>
        <Timer initialTime={600000} direction="backward" startImmediately={false}  >
                {({ start, pause, reset }) => (
                    <>
                        <div>
                            <Timer.Minutes /> minutes 
                        </div>
                        <div>
                            <Timer.Seconds /> seconds 
                        </div>
                        {/* use state(explain state in writeup) to render timer from imported react libary (compound timer) */}


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
                    <div className="item"><img src={situps} alt='short sit ups ' />
                        <div className="overlay">
                            <div className='overlayText'>
                            To begin the sit-up start with feet flat on the ground and knees bent. 
                            Contract your abdominals and raise your trunk up until it is vertical or nearly vertical to the ground. 
                            Lower yourself under control and repeat. 
                            Note that the hands may be placed in front of the body to make the exercise easier or across the chest: 
                            Will make the exercise more challenging. 
                            Do not however, use your arms to flex forward and cheat the exercise.
                            </div>
                        </div>
                    </div>
                    {/* routing from images */}
                    <div className="item"><img src={bridge} alt='spinal bridge' />
                        <div className="overlay">
                            <div className='overlayText'>
                            Lie on your back with knees bent and arms by your sides. 
                            Tighten your abs and drive your hips up by contracting your glutes. 
                            Extend until there is a straight line between your knees, hips and shoulders. 
                            Lower, and repeat
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Workout10;