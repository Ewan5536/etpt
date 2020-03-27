import React from "react";
import headPress from '../images/Hand-StandPushUp.gif';
import incline from '../images/DeclinedPushup.gif';
import DoorRow from '../images/armRow.gif';
import xpress from '../images/closeHandPressUp.gif';
import CalfStrh from '../images/CalfWallStretch.gif';
import BiePress from '../images/bieCurls.gif';
import "../App.css";


function Strength () {

    return (
        
    <div>
        <div className="topic">
            <div className="item">
                <img src={headPress} alt='over-head press' />
                <div className="overlay">
                    <div className='overlayText'>
                    •	 SET-UP: Set-up on a soft surface next to a tall sturdy box or household object on which you can rest your feet. 
                    Place your feet on the box and incline at the hips such that there is a right angle between your legs and your torso. 
                    Make sure you have total balance and stability before beginning the movement.<br />
                    •	 MOVEMENT: Lower yourself as far as you can under complete control, then reverse the movement - using the box for stability at all times.<br />
                    •	 EMPHASIS: The key to the handstand push up is control - do not exceed a range of motion you can control.
                    </div>
                    {/*exercise text*/}
                </div>
            </div>
            {/* routing from images */}
            <div className="item">
                <img src={incline} alt='incline press' />
                <div className="overlay">
                <div className='overlayText'>
                •	SET-UP: Find a surface to elevate your feet on. 
                    With the legs together and hips up, establish proper upper body posture with a neutral back. 
                    Place your hands on the floor at slightly wider than shoulder width and fingers pointing forward.<br/>
                    •	 MOVEMENT: Press the chest off the floor until the arms are straight, then return to the starting position. 
                    Cue the descent by attempting to 'pull' yourself down to the floor with your shoulder blades.<br/>
                    •	EMPHASIS: Don't allow the hips or the lower back to sag. Use a complete range of motion, bringing the chest to the floor. 
                    Don't push the head forward to the floor.
                </div>
                {/* exercise text */}
            </div>
            </div>
        </div>
        <div className="topic">
            <div className="item">
                <img src={DoorRow} alt='single arm door row' />
                    <div className="overlay">
                    •	SET-UP: Begin in front of a sturdy door frame.
                        Establish a shoulder width or slightly wider stance and grasp the doorway with one arm so that the wall is perpendicular to your arm.<br />
                        •	 LIFT: Now slowly sit back using your arm to maintain your upright position and to keep you from falling down.
                        Once you have a suitable resistance in your arm, simply pull yourself into the doorframe.
                        Go slowly and do not use momentum.<br />
                        •	 REPETITIONS: Perform all prescribed reps on one side, then on the other.
                        This counts as one set.
                    </div>
            </div>
            <div className="item">
                <img src={xpress} alt='close hand press-ups' />
                    <div className="overlay">
                      •	SET-UP: Set up with your hands touching each other and your upper arms to the torso. With the toes together and hips up, establish proper upper body posture with a neutral back.
                <br />• LIFT: Press the chest off the floor until the arms are straight, then return to the starting position. Cue the descent by attempting to 'pull' yourself down to the floor with your shoulder blades.
                <br />• EMPHASIS: Don't allow the hips or the lower back to sag. Keep the elbows inside - don't let them flare out to the sides. Use a complete range of motion, bringing the chest to the floor. Don't push the head forward to the floor.

                    </div>
            </div>
        </div>
        <div className="topic">
                <div className="item">
                    <img src={BiePress} alt='towel biecep curl' />
                        <div className="overlay">
                        •	SET-UP: Find a long towel, rope or other material. 
                            Brace through your core and establish a neutral spine. 
                            Grasp the towel with one hand at each end, and fix the bottom underneath the middle of your foot.
                        •	 MOVEMENT: Curl your arms up to your chest, keeping your elbows at your side and eyes straight ahead. 
                            Press against the towel and provide appropriate tension throughout the range of motion. 
                            Do not let your upper back round over - consciously pull your shoulder blades together to provide a stable base for your arms to pull from. 
                            It may take a few practice reps, or even sets, to get the feel of this exercise.
                        •	 EMPHASIS: Do not swing - keep your core tight and a neutral spine.
                        </div>
                </div>

                <div className="item">
                    <img src={CalfStrh} alt='calf stretch against wall' />
                        <div className="overlay">
                        MOVEMENT: Stand facing a wall or other sturdy support and place your arms against it for stabilization. 
                        Bring the off leg forward in line with your chest, 
                        and gently step the leg to be stretched backward keeping the heel flat to the ground. 
                        Lean into the wall or move your back foot farther back to increase the stretch.
                        REPETITIONS: Hold for the full prescribed time on one side, 
                        then switch sides and repeat. 
                        This counts as one set
                        </div>
                </div>
        </div>
    </div>
    )
}

export default Strength ;