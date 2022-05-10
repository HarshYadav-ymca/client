import React from "react";
import { Navbar, Nav, Row, Col } from "react-bootstrap";
import brand from "../images/brand.png";
import "../styles/navBar.css";

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="white" variant="light">
      <Row className="mx-0">
        <Col lg="1" md="2" sm="3" xs="4" className="ml-5">
          <Navbar.Brand href="#">
            <img src={brand} alt="Brand" className="img-fluid" />
          </Navbar.Brand>
        </Col>
        <Col>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav ">
            <Nav className="me-auto">
              <Nav.Link href=".." className="text-primary mr-4 mt-2">
                Home
              </Nav.Link>
              <Nav.Link href="Services" className="text-primary mr-4 mt-2">
                Services
              </Nav.Link>
              <Nav.Link href="about" className="text-primary mt-2">
                About Us
              </Nav.Link>
            </Nav>
            <Nav className="ml-auto">
              <Nav.Link href="#list" className="mt-1 butons">
                List Your Property
              </Nav.Link>
              <Nav.Link href="#login" className="ml-2 mt-1 butons">
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Col>
      </Row>
    </Navbar>
  );
}
export default NavBar;
