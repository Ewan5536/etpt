import React from 'react';
import NavBar from './components/navbar/NavBar';
import Home from './pages/Home';
import './App.css';
import {HashRouter as Router,Route} from "react-router-dom";
import Endurance from './pages/Endurance';
import Login from './pages/Login';
import Flex from './pages/Flexability';
import Strength from './pages/Strength';
import Workout10 from './pages/10minWo';
import Workout20 from './pages/20minWo';
import Workout40 from './pages/40minWo';
import Nutrition from './pages/Nutrition';
import JoinLive from './pages/JoinLive';
import Premium from './pages/Premium';
import Forum from './pages/Forum';
import Contact from './pages/Contact';
import CoolDwn from './pages/CoolDwn';
import WarmUp from './pages/WarmUp';
import Motiv8 from './pages/Motivate';


function App() {
  return (
    
    <div className="App">
      <Router>
      <div><NavBar/></div>
      

      {/* <img src={logo} className="App-header" alt="logo" /> */}
      <p className="overlayText">
        Welcome to Ewan Thomas Personal Training Online
          <br />Why not comment in the Forum & Donate, to help the site grow and become better.
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
      <Route path='/nutrition' component={Nutrition}/>
      <Route path='/joinLive' component={JoinLive}/>
      <Route path='/premium' component={Premium}/>
      <Route path='/forum' component={Forum}/>
      <Route path='/contact' component={Contact}/>
      <Route path='/warmUp' component={WarmUp}/>
      <Route path='/coolDwn' component={CoolDwn}/>
      <Route path='/motivate' component={Motiv8}/>
      <br /><br /><br />
      <div></div>
      </Router>
    </div>
  );
}

export default App;
