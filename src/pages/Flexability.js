import React from "react";
import endurance from '../images/endurCard.gif';
import Plank from '../images/plank.gif';
import incline from '../images/inclinePress.gif';
import DoorRow from '../images/doorRow.gif';

import { Link } from 'react-router-dom';


function Flexability() {

    return (
        <div>
            <div className="topic">
                <div className="item">
                    <img src={Plank} alt='over-head press' />
                        <div className="overlay">
                            <div className='overlayText'>
                                SET-UP: Set up on the floor resting on your elbows and toes.
                                Place your elbows in line with your shoulders, and form a straight line between your feet, hips and shoudlers.<br />
                                LIFT: Brace through the core and maintain proper posture throughout.<br />
                                EMPHASIS: Do not allow the hips the sag, or the butt to flare up above the back.
                                Keep the shoulder blades back and together. It may be helpful to visualize proper standing posture, only your body is rotated 90 degrees toward the floor.
                            </div>
                            {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                        </div>
                </div>
                {/* routing from homepage */}
            <div className="item">
                <img src={incline} alt='incline press' />
                    <div className="overlay">
                        <div className='overlayText'>
                            SET-UP: Find a surface to elevate your feet on.
                            With the legs together and hips up, establish proper upper body posture with a neutral back.
                            Place your hands on the floor at slightly wider than shoulder width and fingers pointing forward.<br />
                            MOVEMENT: Press the chest off the floor until the arms are straight, then return to the starting position.
                            Cue the descent by attempting to 'pull' yourself down to the floor with your shoulder blades.<br />
                            EMPHASIS: Don't allow the hips or the lower back to sag. Use a complete range of motion, bringing the chest to the floor.
                            Don't push the head forward to the floor.
                        </div>
                        {/* https://www.youtube.com/watch?v=SKPab2YC8BE&feature=emb_title */}
                    </div>
            </div>
                    <div className="topic">
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
                    <div className="item">
                        <img src={endurance} alt='endurance' />
                            <div className="overlay">
                                ddhdhdhd dhdhdhdh dhdhdhd hdhdhdh dhdhdh dhh
                                <br />gdgdgdgdgdgdgdg gdgdgd gdgdgd ggdg
                                <br />dhdhdhhdhd
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Flexability;