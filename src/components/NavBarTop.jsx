import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "./Logo";
import "./NavBarTop.css";

export default function NavBarTop() {
  return (
    <>
      <Navbar expand="lg" className="bg-transparent p-0 NavBar">
        <Container className="p-0" fluid>
          <Navbar.Brand href="#home">
            <Logo />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar" aria-label="Toggle navigation bar" />
          <Navbar.Offcanvas
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
          >
            <Offcanvas.Header className="closeBtn" closeButton>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1">
                <Nav.Link className="navLink" href="#action1" aria-label="Go to Home">Home</Nav.Link>
                <Nav.Link className="navLink" href="#action2" aria-label="Go to New">New</Nav.Link>
                <Nav.Link className="navLink" href="#action1" aria-label="Go to Popular">Popular</Nav.Link>
                <Nav.Link className="navLink" href="#action2" aria-label="Go to Trending">Trending</Nav.Link>
                <Nav.Link className="navLink" href="#action2" aria-label="Go to Categories">Categories</Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}
