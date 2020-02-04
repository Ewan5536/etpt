import React from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import './App.css';
import {HashRouter as Router,Route} from "react-router-dom"  
import Endurance from './pages/Endurance'

function App() {
  return (
    
    <div className="App">
      <Router>
      <div><NavBar/></div>
      

      {/* <img src={logo} className="App-header" alt="logo" /> */}
      <p>
        welcome to Ewan Thomas PT
        </p>
      {/* image tiles */}
      <Route exact path='/' component={Home}/>
      <Route path='/endurance' component={Endurance}/>
    
      <br /><br /><br />
      <div></div>
      </Router>
    </div>
  );
}

export default App;
