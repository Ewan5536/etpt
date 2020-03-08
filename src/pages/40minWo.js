import React from "react";
import "../App.css";
import pike from "../images/PikePress.gif"
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
                                        floor.
                            </div>
                                    {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                        </div>
                </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={pike} alt='twist sit ups' />
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
                    <div className="item"><img src={pike} alt='short sit ups ' />
                        <div className="overlay">
                            <div className='overlayText'>
                                        floor.
                            </div>
                                    {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                        </div>
                </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={pike} alt='twist sit ups' />
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
                    <div className="item"><img src={pike} alt='short sit ups ' />
                        <div className="overlay">
                            <div className='overlayText'>
                                        floor.
                            </div>
                                    {/*https://www.youtube.com/watch?v=KKPTt8TJWIs&feature=emb_title*/}
                        </div>
                </div>
                        {/* routing from homepage */}
                    <div className="item"><img src={pike} alt='twist sit ups' />
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
export default Workout40 ;