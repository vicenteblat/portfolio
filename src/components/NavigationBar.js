import React, { Component } from 'react';
import { Container, Navbar, Nav, NavLink } from 'react-bootstrap';
import { FaGg } from 'react-icons/fa';
import '../css/NavigationBar.css';

class NavigationBar extends Component {
  render() {
    return (
      <header id="Home" data-section="Home">
        <Navbar
          className="nav-text text-uppercase"
          expand="xl"
          bg="secondary"
          variant="dark"
        >
          <Container fluid>
            <Navbar.Brand href="#Home">
              <FaGg /> Vicente Blat
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto">
                <NavLink
                  className="nav-links-tx text-nowrap d-flex justify-content-center"
                  href="#Home"
                >
                  Home
                </NavLink>
                <NavLink
                  className="nav-links-tx text-nowrap d-flex justify-content-center"
                  href="#About"
                >
                  About me
                </NavLink>
                <NavLink
                  className="nav-links-tx text-nowrap d-flex justify-content-center"
                  href="#Resume"
                >
                  Resume
                </NavLink>
                <NavLink
                  className="nav-links-tx text-nowrap d-flex justify-content-center"
                  href="#Certificates"
                >
                  Certificates
                </NavLink>
                <NavLink
                  className="nav-links-tx text-nowrap d-flex justify-content-center"
                  href="#Projects"
                >
                  Projects
                </NavLink>
                <NavLink
                  className="nav-links-tx text-nowrap d-flex justify-content-center"
                  href="#Memes"
                >
                  Memes
                </NavLink>
                <NavLink
                  className="nav-links-tx text-nowrap d-flex justify-content-center"
                  href="#Contact"
                >
                  Contact
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
export default NavigationBar;
