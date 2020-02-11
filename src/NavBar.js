import React, { useState, Component } from 'react';
import logo from './images/logo1.png';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import { Link } from 'react-router-dom'

//app Component from openscource
const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
      <NavbarBrand href="/"><img src={logo} alt='logo' style={{width: '50px'}}/></NavbarBrand>
        <NavbarBrand href="/">Ewan Thomas Pt</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="./Contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./JoinLive">Join Live</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./Motivate">Motivate</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="./Premium">Premium</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Warm Up
                </DropdownItem>
                <DropdownItem>
                  Cool Down
                </DropdownItem>
                <DropdownItem>
                  <link to='./Nutrition'>Nutrition</link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Forum Comments
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText><a href="">email: info@et-pt.co.uk</a></NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Example;