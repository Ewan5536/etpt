import React from "react";
import "../App.css";
import Tierlow from "../images/silver.png"
import Tiermed from "../images/gold.png"
import Tierhig from "../images/fitlife.png"



function Premium() {
  return (<>
  <div className="">

    <div className="">Silver donation package.
    <div className="item">
        <form  name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_xclick"/>
          <input type="hidden" name="business"
            value="info@et-pt.co.uk"/>
          <input type="hidden" name="item_name" value="subcription $19"/>
          <input type="hidden" name="amount" value="19.00"/>
          <input type="hidden" name="return" value="http:/et-pt.co.uk"/> 
          <input type="image" src={Tierlow} alt="logo et-pt"/>
        </form>
    </div>
    </div>

  <div className="">Gold standard donation package.
    <div className="item">

        <form name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_xclick"/>
          <input type="hidden" name="business"
            value="info@et-pt.co.uk"/>
          <input type="hidden" name="item_name" value="subcription $60"/>
          <input type="hidden" name="amount" value="60.00"/>
          <input type="hidden" name="return" value="http:/et-pt.co.uk"/> 
          <input type="image"  src={Tiermed} alt="logo et-pt" />
        </form>
      </div>
    </div>


    <div className="">Fit for life benifit package.
    <div className="item">

        <form name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_xclick"/>
          <input type="hidden" name="business"
            value="info@et-pt.co.uk"/>
          <input type="hidden" name="item_name" value="subcription $80"/>
          <input type="hidden" name="amount" value="80.00"/>
          <input type="hidden" name="return" value="http:/et-pt.co.uk"/> 
          <input type="image"  src={Tierhig} alt="logo et-pt" />
        </form>
      </div>
    </div>


  </div>
  </>);
}
  export default Premium ;