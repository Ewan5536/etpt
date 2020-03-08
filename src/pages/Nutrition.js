import React from "react";
import "../App.css";
import Nutri from '../images/nutriPic.png';





function Nutrition() {

    return (
        <>
            
        <div>
                       
            <form name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_xclick"/>
          <input type="hidden" name="business"
            value="info@et-pt.co.uk"/>
          <input type="hidden" name="item_name" value="nutrition subcription $80"/>
          <input type="hidden" name="amount" value="80.00"/>
          <input type="hidden" name="return" value="http:/et-pt.co.uk"/> 
          <input type="image" src={Nutri} />
        </form>
        </div>
        
        <div>
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/RjfC7Wp34Fc" 
          frameborder="0" 
          allow="accelerometer; 
            autoplay; 
            encrypted-media; 
            gyroscope; 
            picture-in-picture" 
            allowfullscreen>
          </iframe>
        </div>
        </>
    );
}

export default Nutrition;

