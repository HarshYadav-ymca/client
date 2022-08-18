import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../styles/homebottom.css";
import house from "../images/house.png";
import cash from "../images/cash.png";
import kitchen from "../images/kitchen.png";
import furniture from "../images/furniture.png";
import contact from "../images/contact.png";
import money from "../images/Money.png";

function HomeBottom() {
  return (
    <div className="mt-5">
      <Container>
        <Row className="justify-content-center icons shadow">
          <Col lg="2" className="icns justify-content-center">
            <img
              src={house}
              alt="house"
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-center" href="/rent">
              Rental <br></br> Properties
            </h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img src={cash} alt="house" className="img-fluid mx-auto d-block" />
            <h1 className="text-center">
              Domestic <br></br> Assistance
            </h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={furniture}
              alt="house"
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-center">Basic House Furnishing</h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={contact}
              alt="house"
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-center">
              ONLINE LISTING <br></br>AND RENTING
            </h1>
          </Col>
          <Col lg="2" className="icns justify-content-center">
            <img
              src={kitchen}
              alt="house"
              className="img-fluid mx-auto d-block"
            />
            <h1 className="text-center">
              Kitchen <br></br> Utensils
            </h1>
          </Col>
        </Row>
        <img src={money} alt="" className="img-fluid mt-5" />
      </Container>
    </div>
  );
}

export default HomeBottom;
