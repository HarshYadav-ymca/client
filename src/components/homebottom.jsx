import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/homebottom.css";
import house from "../images/house.png";

function HomeBottom() {
  return (
    <div className="mt-5">
      <Container>
        <Row className="justify-content-center icons">
          <Col lg="2" className="icns justify-content-center">
            <img
              src={house}
              alt="house"
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-center">Rental Properties</h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={house}
              alt="house"
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-center">Rental Properties</h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={house}
              alt="house"
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-center">Rental Properties</h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={house}
              alt="house"
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-center">Rental Properties</h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={house}
              alt="house"
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-center">Rental Properties</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default HomeBottom;
