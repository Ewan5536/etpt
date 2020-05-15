import React, { useState} from 'react';
import logo from '../../images/logo1.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './navbar.css';

//app Component from openscource
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/"><img src={logo} alt='logo' style={{width: '50px'}}/></NavbarBrand>
        <NavbarBrand href="/">ET-PT ONLINE FITNESS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto navbar-link-container" navbar>
            <NavItem>
              <Link to="./contact" className='navbar-link'>Contact</Link>
            </NavItem>
            <NavItem>
              <Link to="./joinLive" className='navbar-link'>Join Live</Link>
            </NavItem>
            <NavItem>
              <Link to="./motivate" className='navbar-link'>Motivate</Link>
            </NavItem>
            <NavItem>
              <Link to="./premium" className='navbar-link'>Premium</Link>
            </NavItem>
            <NavItem>
              <Link to="./nutrition" className='navbar-link'>Nutrition</Link>
            </NavItem>
            <NavItem>
              <Link to="./home" className='navbar-link'>Exercise</Link>
            </NavItem>
            <NavItem>
              <Link to="./coolDwn" className='navbar-link'>Warm-up & Cooldown</Link>
            </NavItem>
            <NavItem>
              <Link to="./forum" className='navbar-link'>Forum</Link>
            </NavItem>
          </Nav>
            <audio className='audio' id="audio" src="audio/audio_sample.mp3"
              preload="auto" controls muted loop autoplay>
            </audio>
          <NavbarText><a href="mailto:ewanthomas.pt@gmail.com" target="_blank">email: et-pt.co.uk</a></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;