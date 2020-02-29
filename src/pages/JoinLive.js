import React from "react";
import Iframe from "react-iframe";
import { Link } from 'react-router-dom'

function JoinLive () {
    return (<>

        <div className="topic">

            <div className="item">

                <div>
                    <h1>
                        COMMING SOON!!
                    <br />
                        <p>
                            Live online classes straight to your laptop or device.
                        </p>
                    </h1>
                </div>


                <div className="form-group">

                    Monday - Friday: 17:30  - 20.30
                    <p />
                    Saturday: 8:00 - 11:00
                    <p />
                    Sunday: By Appointment Only
                </div>
            </div>
        </div>
                <div>
                <Iframe url="https://play.streamingvideoprovider.com/popplayer.php?it=pmci5tze9c0w&is_link=1&w=720&h=405&pause=1&title=ET-PT+Live+Classes&skin=3&repeat=&brandNW=1&start_volume=100&bg_gradient1=%23ffffff&bg_gradient2=%23e9e9e9&fullscreen=1&fs_mode=2&skinAlpha=50&colorBase=%23000000&colorIcon=%23ffffff&colorHighlight=%235cbbf5&direct=false&no_ctrl=&auto_hide=1&viewers_limit=0&cc_position=bottom&cc_positionOffset=70&cc_multiplier=0.03&cc_textColor=%23ffffff&cc_textOutlineColor=%23ffffff&cc_bkgColor=%23000000&cc_bkgAlpha=0.1&image=&mainBg_Color=%23ffffff&aspect_ratio=16%3A9"
         width="100% vw"
         height="490px"
         id="myId"
         className="myClassname"
         display="initial"
         position="relative"/>

                </div>
        
   </> );
}

export default JoinLive;