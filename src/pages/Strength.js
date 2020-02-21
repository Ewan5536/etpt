import React from "react";
import endurance from '../images/endurCard.gif';
import headPress from '../images/headStandPress.gif';
import incline from '../images/inclinePress.gif';
import DoorRow from '../images/doorRow.gif';
import ExtRota from '../images/ExtRota.gif';
import BiePress from '../images/biePress.gif';
import { Link } from 'react-router-dom';


function Strength () {

    return (
        <div>
            <div className="topic">
                <div className="item">


                    <img src={headPress} alt='over-head press' />

                    <div className="overlay">

                        <div className='overlayText'>
                        SET-UP: Set-up on a soft surface next to a tall sturdy box or household object on which you can rest your feet. 
                        Place your feet on the box and incline at the hips such that there is a right angle between your legs and your torso. 
                        Make sure you have total balance and stability before beginning the movement.<br />
                        MOVEMENT: Lower yourself as far as you can under complete control, then reverse the movement - using the box for stability at all times.<br />
                        EMPHASIS: The key to the handstand push up is control - do not exceed a range of motion you can control.
                        </div>
                        {/*https://www.youtube.com/watch?v=afxMtSczfrU*/}
                    </div>
                </div>
                {/* routing from homepage */}
                <div className="item">


                    <img src={incline} alt='incline press' />

                    <div className="overlay">
                    <div className='overlayText'>
                        SET-UP: Find a surface to elevate your feet on. 
                        With the legs together and hips up, establish proper upper body posture with a neutral back. 
                        Place your hands on the floor at slightly wider than shoulder width and fingers pointing forward.<br/>
                        MOVEMENT: Press the chest off the floor until the arms are straight, then return to the starting position. 
                        Cue the descent by attempting to 'pull' yourself down to the floor with your shoulder blades.<br/>
                        EMPHASIS: Don't allow the hips or the lower back to sag. Use a complete range of motion, bringing the chest to the floor. 
                        Don't push the head forward to the floor.
                    </div>
                    {/* https://www.youtube.com/watch?v=SKPab2YC8BE&feature=emb_title */}
                </div>
                </div>
            </div>
                <div className="item">
                    <img src={DoorRow} alt='single arm door row' />
                        <div className="overlay">
                            SET-UP: Begin in front of a sturdy door frame.
                            Establish a shoulder width or slightly wider stance and grasp the doorway with one arm so that the wall is perpendicular to your arm.<br />
                            LIFT: Now slowly sit back using your arm to maintain your upright position and to keep you from falling down.
                            Once you have a suitable resistance in your arm, simply pull yourself into the doorframe.
                            Go slowly and do not use momentum.<br />
                            REPETITIONS: Perform all prescribed reps on one side, then on the other.
                            This counts as one set.
                        </div>
                </div>
            
                <div className="topic">
                <div className="item">
                    <img src={BiePress} alt='towel biecep curl' />
                    <div className="overlay">
                        SET-UP: Find a long towel, rope or an otherwise suitably strong material. 
                        Brace through your core and establish a neutral spine. 
                        Grasp the towel with one hand at each end, and fix the bottom underneath the middle of one of your feet.<br/>
                        MOVEMENT: Curl your arms up to your chest, keeping your elbows at your side and eyes straight ahead. 
                        Use your leg to press against the towel and provide appropriate tension throughout the range of motion of the exercise. 
                        Do not let your upper back round over - consciously pull your shoulder blades together to provide a stable base for your arms to pull from. 
                        It may take a few practice reps, or even sets, to get the feel of this exercise.<br/>
                        EMPHASIS: Do not swing - keep your core tight and a neutral spine.
                    </div>
                </div>
                <div className="item">
                    <img src={ExtRota} alt='external rotations' />
                    <div className="overlay">
                        SET-UP: Find an object that weighs several pounds or more that you can grasp with one hand. 
                        For example, a book or a 2l bottle. Lying on your side, straighten your upper arm so that it is parallel to and resting on your upper body.
                        Flex the elbow to 90 degrees so that the forearm is perpenidcular to your body pointing out in front of you.<br/> 
                        LIFT: Keeping your elbow fixed on your side, rotate your forearm from your front so that it is in line with your side. Return the weight to the starting position.<br/>
                        EMPHASIS: Do not use momentum and keep motion in the rest of the body to a minimum.<br/>
                        REPETITIONS: Perform all prescribed reps on one side, then on the other. 
                        This counts as one set.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Strength ;