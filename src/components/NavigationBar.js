import React, { Component } from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import '../css/NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      //scrolling dark expand="md" fixed="top"
      <>
        <Navbar bg="light" expand="md">
          <Navbar.Brand>Vicente Blat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink href="/Home">Home</NavLink>
              <NavLink href="/About">About me</NavLink>
              <NavLink href="/Resume">Resume</NavLink>
              <NavLink href="/Resume">Certificates</NavLink>
              <NavLink href="/Projects">Projects</NavLink>
              <NavLink href="/Memes">Memes</NavLink>
              <NavLink href="/Contact">Contact</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    );
  }
}
export default NavigationBar;
