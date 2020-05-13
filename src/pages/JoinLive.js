import React from "react";
import Iframe from "react-iframe";

function JoinLive() {
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
            
            <Iframe url="https://livewebinar.com/467-487-535/b0454516fd26db4b88012fc25de5d3cc"
                width="100% vw"
                height="490px"
                id="myId"
                className="myClassname"
                display="initial"
                position="relative" />

        </div>

    </>);
}

export default JoinLive;