import React from "react";
import "../App.css";
import Iframe from "react-iframe";


function Motiv8() {
    return (
    <div>
        <Iframe url="https://ewan5536.github.io/MacroCalculator/"
         width="100% vw"
         height="490px"
         id="myId"
         className="myClassname"
         display="initial"
         position="relative"/>

        <div className="overlayText">
            Start Acheiveing Your Goal

                    
  
    
    <h1>The Basics: Metabolism</h1>
    <p>
    Find out your BMR (basal metabolic rate) or TDEE (total daily energy expenditure). 
    </p>
    <p>
    Let's say we have a guy named Bob.
    </p>    Gender: Male<br/>
    Weight: 163lbs<br/>
    Height: 5ft 5in<br/>
    Age: 29<br/>
    Bodyfat: 14%<br/>
    BMR: 1746<br/>

    Bob will need to choose his activity level which will be based on how much he's willing to spend time in the gym.<br/> Since he works from home, he can work out 6 times a week while taking a day off to spend time with people he holds dear.
    <br/>
    TDEE: 2630<br/>
    Great! Bob now knows how much calories he needs to maintain his weight.
    <br/>
    To lose weight, reduce 500 calories from the TDEE. To gain weight, add 500 calories to TDEE.
    <br/>
    Note: For losing weight, I am practitioner of not drastically reducing your caloric intake too much. I would do a 25 minute HIIT cardio on the spin bike that will burn approximately around 250 calories,<br/> and reduce 250 calories from my meal template.
    <br/>
  
        </div>

        {/* 
            refferanced from ewan5536 github account Marcocalc repo https://ewan5536.github.io/MacroCalculator/
        */}
    </div>
    )
}
export default Motiv8 ;