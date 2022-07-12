import React from "react";
import "../styles/rent.css";
import { Container, Card, Row, Col } from "react-bootstrap";
import baseimg from "../images/sample1.jpg";

function RentBottom() {
  return (
    <div className="mt-3">
      <h1 className="about-heading ml-3 border-bottom">Properties to Rent</h1>

      <Container>
        <Row>
          <Col lg="4">
            <Card
              className="shadow mt-5 mb-3"
              onClick={() => {
                console.log("clicked");
              }}
            >
              <div>
                <Row>
                  <Col className="p_img border-bottom mb-2 mx-auto">
                    <img src={baseimg} alt="" className="img-fluid" />
                  </Col>
                </Row>
              </div>
              <h2 className="text-center services-text border-bottom mx-2">
                1 BHK FLAT
              </h2>
              <p className="services-text mx-3 mb-0 mt-1">Location :</p>
              <p className="services-text mx-3 mt-0">Rent :</p>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default RentBottom;
