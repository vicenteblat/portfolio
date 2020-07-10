import React, { Component } from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import '../css/NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      //scrolling dark expand="md" fixed="top"
      <Navbar className="navbar-background">
        <Nav className="mr-auhref">
          <NavLink className="navbar-links" href="/Home">
            Home
          </NavLink>
          <NavLink href="/About">About me</NavLink>
          <NavLink href="/Resume">Resume</NavLink>
          <NavLink href="/Projects">Projects</NavLink>
          <NavLink href="/Memes">Memes</NavLink>
          <NavLink href="/Contact">Contact</NavLink>
        </Nav>
      </Navbar>
    );
  }
}
export default NavigationBar;
