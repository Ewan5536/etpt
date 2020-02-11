import React from 'react';
import NavBar from './NavBar';
import Home from './pages/Home';
import './App.css';
import {HashRouter as Router,Route} from "react-router-dom"  
import Endurance from './pages/Endurance'
import Login from './pages/Login'
import Flex from './pages/Flexability'
import Strength from './pages/Strength'
import Workout10 from './pages/10minWo'
import Workout20 from './pages/20minWo'
import Workout40 from './pages/40minWo'

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
      <Route exact path='/' component={Login}/>
      <Route path='/strength' component={Strength}/>
      <Route path="/home" component={Home}/>
      <Route path='/endurance' component={Endurance}/>
      <Route path='/flexability' component={Flex}/>
      <Route path="/10minWo" component={Workout10}/>
      <Route path='/20minWo' component={Workout20}/>
      <Route path='/40minWo' component={Workout40}/>
      <br /><br /><br />
      <div></div>
      </Router>
    </div>
  );
}

export default App;
