import React from "react";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";

const Navbars = () => {
  return (
    <div>
      <Navbar className="shadow" expand="lg" fixed="top" variant="light">
        <Container>
          <Navbar.Brand href="#home" className="text-white">
            React-Bootstrap
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className="text-white">
                Home
              </Nav.Link>
              <Nav.Link href="#link" className="text-white">
                Link
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navbars;
