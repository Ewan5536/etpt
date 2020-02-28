import React from 'react';
import Iframe from "react-iframe";
function forum () {

    return(

        <div>

         <Iframe url="https://flat-pack-forum.herokuapp.com/signIn"
         width="100% vw"
         height="490px"
         id="myId"
         className="myClassname"
         display="initial"
         position="relative"/>

            <div className="overlayText">
                Leave a Question Or Join a Thread:
            </div>
               {/* refferanced from ewan5536 github account flatpactforum repo https://github.com/Ewan5536/flat-pack-forum/graphs/contributors */}
        </div>
    ); 
}

export default forum;