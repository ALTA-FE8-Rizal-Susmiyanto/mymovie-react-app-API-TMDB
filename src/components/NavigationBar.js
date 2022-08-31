import React, { Component } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "../style/ladingPage.css";

export class NavigationBar extends Component {
  render() {
    return (
      <Navbar>
        <Container>
          <Navbar.Brand>Nonton|Gratis</Navbar.Brand>
          <Nav>
            <Nav.Link>Genre</Nav.Link>
            <Nav.Link>Favorite</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavigationBar;
