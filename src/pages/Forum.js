import React from 'react';
import Iframe from "react-iframe";
function forum () {

    return(

        <div>
<div>sponsered by flatpack forum</div>

<Iframe url="https://flat-pack-forum.herokuapp.com/signIn"
        width="100% vw"
        height="490px"
        id="myId"
        className="myClassname"
        display="initial"
        position="relative"/>

        </div>
    ); 
}

export default forum;