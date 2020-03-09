import React from "react";
import "../App.css";
import pike from "../images/PikePress.gif"
import sidebri from "../images/SideBridges.gif"
import ovrhead from "../images/OverheadReach.gif"
import mntclimb from "../images/mountain-climbers.gif"
import widepress from "../images/widePushup.gif"
import sidetwists from "../images/sidetwists.gif"
import Timer from "react-compound-timer"


function Workout40 () {
    return (
        <>
         <div>
        <Timer initialTime={2400000} direction="backward" startImmediately={false}  >
                {({ start, pause, reset }) => (
                    <>
                        <div>
                            <Timer.Minutes /> minutes 
                        </div>
                        <div>
                            <Timer.Seconds /> seconds 
                        </div>
                        {/* use state(explain state in write up) to render timer from imported react libary (compound timer) */}


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
                    <div className="item"><img src={pike} alt='short sit ups ' />
                        <div className="overlay">
                            <div className='overlayText'>
                            MOVEMENT: Lean your weight into your hands until you feel a suitable amount of tension. 
                            Slowly lower your body to the floor, keeping your weight on your hands and without moving at the hips. 
                            Push yourself up - under control, and without momentum - back to the start position.
                            </div>
                        </div>
                    </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={sidebri} alt='side bridge' />
                        <div className="overlay">
                            <div className='overlayText'>
                            MOVEMENT: Start by lying on your side. With your upper arm straight, place your forearm flush against the ground at a 90 degree angle from your body. 
                            Now raise your hips up so your weight is distributed between your forearm and your feet. 
                            Brace through your core and establish a straight line between your shoulders, hips and feet, maintaining a neutral spine. 
                            Hold for the allotted time and repeat on the opposite side.
                            REPETITIONS: Hold for the full prescribed time on one side, then switch sides and repeat. 
                            This counts as one set.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="topic">
                    <div className="item"><img src={ovrhead} alt='over head stretch ' />
                        <div className="overlay">
                            <div className='overlayText'>
                            Standing straight, or kneeling: gently lift and extend arms straight over head, as comfort and range of motion will allow. 
                            Hold for the desired time.
                            </div>
                        </div>
                </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={mntclimb} alt='alt. squat thrusts' />
                        <div className="overlay">
                            <div className='overlayText'>
                            MOVEMENT: Start on all fours and pike your hips up so that your feet are on the ground, and your arms and legs are straight. 
                            Now simply lift one leg up so that your knee is at chest height. 
                            Quickly switch legs and repeat in a rhythmic fashion. 
                            It is critically important in this exercise to achieve range of motion in the hips and not to excessively flex the lumbar spine. 
                            Start with a slow pace and short strides and increase speed and stride length as you progress. 
                            REPETITIONS: When both legs have come up to the chest, this counts as one repetition.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="topic">
                    <div className="item"><img src={widepress} alt='wide press-ups' />
                        <div className="overlay">
                            <div className='overlayText'>
                            SET-UP: Set up with your hands wider than shoulder width. 
                            With the toes together and hips up, establish proper upper body posture with a neutral back. 
                            LIFT: Press the chest off the floor until the arms are straight, then return to the starting position. 
                            Cue the descent by attempting to 'pull' yourself down to the floor with your shoulder blades.
                            </div>
                        </div>
                </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={sidetwists} alt='side twists' />
                        <div className="overlay">
                            <div className='overlayText'>
                                • SET-UP: Begin standing feet apart.
                                Establish a shoulder width or slightly wider stance.
                                <br />• MOVEMENT: Now slowly rotate the torso side to side maintaining your upright position.
                                Reach out to the upper most put of the direction of travel, and return to the lower most on the oppersite side.
                                <br />• REPETITIONS: Perform all prescribed reps on one side, then on the other.
                                This counts as one set.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        





        </>
    )
}
export default Workout40 ;