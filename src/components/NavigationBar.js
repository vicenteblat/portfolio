import React, { Component, onMouseEnter } from 'react';
import { Navbar, Nav, NavLink } from 'react-bootstrap';
import '../css/NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      <Navbar className="navbar-container" expand="md">
        <Navbar.Brand className="navbar-logo">VB</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavLink className="navbar-links" href="/Home">
              Home
            </NavLink>
            <NavLink className="navbar-links" href="/About">
              About me
            </NavLink>
            <NavLink className="navbar-links" href="/Resume">
              Resume
            </NavLink>
            <NavLink className="navbar-links" href="/Resume">
              Certificates
            </NavLink>
            <NavLink className="navbar-links" href="/Projects">
              Projects
            </NavLink>
            <NavLink className="navbar-links" href="/Memes">
              Memes
            </NavLink>
            <NavLink className="navbar-links" href="/Contact">
              Contact
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default NavigationBar;
