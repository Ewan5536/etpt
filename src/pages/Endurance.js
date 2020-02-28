import React from "react";
import endurance from '../images/leghops.gif';
import montClimb from '../images/mountain-climbers.gif';
import twisit from '../images/twist-sits.gif';
import squatjump from '../images/squatjump.gif';
import pressUp from '../images/pressUps.gif';
import Hipthrust from '../images/SupineBridge.gif';
import wlklegstretch from '../images/walkLegStr.gif';
import widepress from '../images/widePushup.gif';

import "../App.css";


function Endurance() {

    return (
        <div>

            <div>
                <div className="topic">
                    <div className="item"><img src={montClimb} alt='stride jumps' />
                        <div className="overlay">
                            <div className='overlayText'>
                                MOVEMENT: Start on all fours and pike your hips up so that your feet are on the ground, and your arms and legs are straight. 
                                Now simply lift one leg up so that your knee is at chest height. 
                                Quickly switch legs and repeat in a rhythmic fashion. 
                                It is critically important in this exercise to achieve range of motion in the hips and not to excessively flex the lumbar spine. 
                                Start with a slow pace and short strides and increase speed and stride length as you progress.
                                <br /> REPETITIONS: When both legs have come up to the chest, this counts as one repetition
                           </div>
                        </div>
                    </div>
                    {/* routing from homepage */}
                    <div className="item"><img src={twisit} alt='twist sit ups' />
                        <div className="overlay">
                            <div className='overlayText'>
                            MOVEMENT: To begin the sit-up start with feet flat on the ground and knees bent. 
                            Contract your abdominals and raise your trunk up until it is vertical or nearly vertical to the ground. 
                            Rotating through the middle and upper back, turn your body 45 degrees to the side, return to the center and repeat in the other direction. 
                            Lower yourself under control and repeat.
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="topic">
                    <div className="item"><img src={squatjump} alt='on the spot squat jumps ' />
                        <div className="overlay">
                            <div className='overlayText'>
                            MOVEMENT: bring your knees towards your chest in squat action. Jump as high as you can and. Quickly revert your legs to land on your toes, and repeat the movement utilizing the stretch reflex on each jump.
                            </div>
                        </div>
                    </div>
                    <div className="item"><img src={pressUp} alt='the press up' />
                        <div className="overlay">
                            <div className='overlayText'>
                            SET-UP: Set up with your hands either side to the torso. 
                            With the toes together and hips up, establish proper upper body posture with a neutral back.
                            LIFT: Press the chest off the floor until the arms are straight, then return to the starting position. 
                            Cue the descent by attempting to 'pull' yourself down to the floor with your shoulder blades.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="topic">
                    <div className="item"><img src={Hipthrust} alt='hip thrusts' />
                        <div className="overlay">
                            <div className='overlayText'>
                            MOVEMENT: Lie on your back with knees bent and arms by your sides. 
                            Tighten your abs and drive your hips up by contracting your glutes. 
                            Extend until there is a straight line between your knees, hips and shoulders.
                            Lower and repeat.
                           </div>
                        </div>
                    </div>
                    {/* routing from homepage */}
                    <div className="item"><img src={widepress} alt=' wide arm press up' />
                        <div className="overlay">
                            <div className='overlayText'>
                            SET-UP: Set up with your hands slightly wider than shoulder width - so that the upper arms are tucked at 45-degree angle to the torso - and fingers pointing forward. 
                            With the toes together and hips up, establish proper upper body posture with a neutral back. 
                            LIFT: Press the chest off the floor until the arms are straight, then return to the starting position. 
                            Cue the descent by attempting to 'pull' yourself down to the floor with your shoulder blades.
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div className="topic">
                    <div className="item"><img src={wlklegstretch} alt='walking leg stretch' />
                        <div className="overlay">
                            <div className='overlayText'>
                            •	MOVEMENT: Lift your ankle behind you. 
                            Keeping the knee next to your stabilizing leg, bring the ankle up to your buttocks until you feel a good stretch. 
                            Keep the knee in a line with your torso and do not allow it to flare forward or outward. Hold for prescribed time. 
                            Release and take a step forward. Repeat on the opposite leg. 
                            •	REPETITIONS: Hold for the full prescribed time on one side, then switch sides and repeat. 
                            This counts as one set.

                            </div>
                        </div>
                    </div>
                    <div className="item"><img src={endurance} alt='side to side leg hopping' />
                        <div className="overlay">
                            <div className='overlayText'>
                            •	MOVEMENT: Simply hop up and down, side to side on one leg.
                            Land on the toes and not the heels and perform in a rhythmic fashion.
                            •	REPETITIONS: Perform all prescribed reps on one side, then on the other. 
                            This counts as one set.

                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    )   
}   

export default Endurance;