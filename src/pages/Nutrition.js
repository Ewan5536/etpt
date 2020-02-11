import React from "react";

import {Link} from 'react-router-dom';
 import Nutri from '../images/nutriPic.png';





function Nutrition() {

    return (
            
        <div>
           <button>
               <Link>
                    <img src={Nutri} alt='nutrition sign up' />
                    
                </Link>
            </button> 
            

        </div>

    )
}

export default Nutrition;

