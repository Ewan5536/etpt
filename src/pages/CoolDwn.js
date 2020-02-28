import React from "react";
import "../App.css";
import "../App.css";
import stretchcard from "../images/stretchcard.png"
import playvideo from "../images/fatherson.gif"

function CoolDwn () {
    return (
            
        <div>
            <div className="topic">
                    <div className="item">
                        <img src={stretchcard} alt='dinamic stretches' />
                        <div className="overlay">
                            <div className='overlayText'>

                            </div>
                        </div>
                    </div>       
            </div> 
            <div className="topic">
                    <div className="item">
                        <img src={playvideo} alt='father and son' />
                        <div className="overlay">
                            <div className='overlayText'>

                            </div>
                        </div>
                    </div>       
            </div> 

        </div>

    )
}

export default CoolDwn ;