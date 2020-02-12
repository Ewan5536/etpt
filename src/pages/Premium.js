import React from "react";
import {Link} from "react-router-dom"


function Premium() {
  return (
    <div>dhdhdhdhd
        <form  name="_xclick" action="https://www.paypal.com/cgi-bin/webscr" method="post">
          <input type="hidden" name="cmd" value="_xclick"/>
          <input type="hidden" name="business"
            value="info@et-pt.co.uk"/>
          <input type="hidden" name="item_name" value="subcription $25"/>
          <input type="hidden" name="amount" value="25.00"/>
          <input type="hidden" name="return" value="http:/et-pt.co.uk"/> 
          <input type="image" src="logo.ico" />
        </form>
    </div>
  );
}
  export default Premium ;