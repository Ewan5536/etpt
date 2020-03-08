// import React from "react"



// const Login = () =>(
    //     <div className="">
    //         <h2>Login</h2>
    //         <form name="form" >
    //             <div className={'form-group' }>
    //                 <label htmlFor="username">Username</label>
    //                 <input type="text" className="form-control" name="username" />
    //             </div>
    //             <div className={'form-group' }>
    //                 <label htmlFor="password">Password</label>
    //                 <input type="password" className="form-control" name="password" />
    //             </div>
    //             <div className="form-group">
    //                 <button className="btn btn-primary">Login</button>
    //             </div>
    //         </form>
    
    //     </div>
    // );
    
    // export default Login;
    
    import React, { useState } from "react";
    import { Button, FormGroup, FormControl, ControlLabel } from "react-bootstrap";
    import "./Login.css";
    import { Auth } from "aws-amplify";
    import Disclaimer from "../images/disclaimer.png";
    import {Link} from "react-router-dom";
    

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }
    
    async function handleSubmit(event) {
        event.preventDefault();
        
        try {
            await Auth.signIn(email, password);
            alert("Logged in");
        } catch (e) {
            alert(e.message);
        }
    }
    

   
    return (<>
    
        <div className="Login">
         <form onSubmit={handleSubmit}>
            <FormGroup controlId="email" bsSize="large">
              <label>Email</label>
                <FormControl
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    />
        </FormGroup>
        <FormGroup controlId="password" bsSize="large">
          <label>Password</label>
          <FormControl
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            />
        </FormGroup>
        <Button block bsSize="large" disabled={!validateForm()} type="submit">
          Login
        </Button>
            <Link to="/Home" className="btn btn-link">Skip Login</Link>
      </form>

      <img src= { Disclaimer } alt='Disclaimer' />
    </div>
    
  </>);
}
