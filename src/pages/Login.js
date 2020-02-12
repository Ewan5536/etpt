import React from "react"
import {Link} from "react-router-dom"



const Login = () =>(
    <div className="">
        <h2>Login</h2>
        <form name="form" >
            <div className={'form-group' }>
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" name="username" />
            </div>
            <div className={'form-group' }>
                <label htmlFor="password">Password</label>
                <input type="password" className="form-control" name="password" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary">Login</button>
              
              
                <Link to="/Home" className="btn btn-link">Skip Login</Link>
            </div>
        </form>
   
    </div>
);

export default Login;