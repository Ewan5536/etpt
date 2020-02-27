import React from "react";
import Plank from '../images/plank.gif';
import catCamel from '../images/cat_camel.gif';
import sideTwist from '../images/sidetwists.gif';
import wallReach from '../images/ScapularWallSlides.gif';
import kneelRota from '../images/thoracicRotation.gif';
import pecStretch from '../images/PecStretch.gif';





function Flexability() {

    return (<div>

        <div>
            <div className="topic">
                <div className="item"><img src={Plank} alt='the plank' />
                    <div className="overlay">
                        <div className='overlayText'>
                            • SET-UP: Set up on the floor resting on your elbows and toes.
                                Place your elbows in line with your shoulders, and form a straight line between your feet, hips and shoudlers.
                            <br />• LIFT: Brace through the core and maintain proper posture throughout.
                            <br />• EMPHASIS: Do not allow the hips the sag, or the butt to flare up above the back.
                            Keep the shoulder blades back and together. It may be helpful to visualize proper standing posture, only your body is rotated 90 degrees toward the floor.
                        </div>
                        {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                    </div>
                </div>
                {/* routing from homepage */}
                <div className="item"><img src={catCamel} alt='cat pose to camel pose' />
                    <div className="overlay">
                        <div className='overlayText'>
                            • SET-UP: Start on all fours with your arms and thighs vertical.
                        <br />• MOVEMENT: Start the movement by bringing your head and pelvis towards each other - effectively rounding your back (the 'camel' position).
                             Then raise your head and push your hips backwards, creating an arch in your back (the 'cat' position).
                              With each position, extend as far as is comfortable and natural, the goal is not to force extreme range of motion.
                        </div>
                        {/* https://www.youtube.com/watch?v=SKPab2YC8BE&feature=emb_title */}
                    </div>
                </div>
            </div>
        </div>
        <div>

            <div className="topic">
                <div className="item"><img src={sideTwist} alt='rotate side to side from torso' />
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
                <div className="item"><img src={wallReach} alt='arms flat to the wall and reach up and repeat' />
                    <div className="overlay">
                        <div className='overlayText'>
                            • SET-UP: Start back against a wall with proper upright posture.
                            <br /> • MOVEMENT: Pressing the forearms against the wall, and keeping them in contact throughout the movement.
                            Slide them up until your arms reach full extension. Slide your arms back down, focusing on pulling your shoulder blades together and down.
                            Bring your elbows into your body and squeeze your shoulder blades together at the bottom of the movement.
                        </div>
                    </div>
                </div>
            </div>


            <div>

                <div className="topic">
                    <div className="item"><img src={kneelRota} alt='rotation out to the side form kneeling' />
                        <div className="overlay">
                            <div className='overlayText'>
                                • SET-UP: Begin on all fours, one hand on the back of your head.<br />
                                • MOVEMENT: Keeping your core braced and with minimal movement in the lower back.
                                    Rotate your upper back downwards and bring the elbow of your elevated arm down towards the elbow of your bracing arm.
                                Slowly reverse the movement and rotate your upper back and arm upwards so that your elbow now points towards the ceiling.<br />
                                • REPETITIONS: Perform all prescribed reps on one side, then on the other. This counts as one set.
    
                            </div>
                        </div>
                    </div>

                    <div className="item"><img src={pecStretch} alt='pectoral stretch against wall' />
                        <div className="overlay">
                            <div className='overlayText'>
                                • MOVEMENT: Place the upper arm against the side of a door frame or wall.
                                Now slowly lean your body forward, keeping your shoulder stable and being sure not to rotate your shoulder forward.
                        To make the stretch more challenging, simply turn your head in the opposite direction.<br />
                                • REPETITIONS: Hold for the full prescribed time on one side, then switch sides and repeat.
                                This counts as one set.
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default Flexability;