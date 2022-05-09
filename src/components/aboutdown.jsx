import React from "react";
import { Row, Col } from "react-bootstrap";
import about1 from "../images/ICONS/about-1.png";
import "../styles/about.css";

function AboutBottom() {
  return (
    <div className="about">
      <Row className="p-4 mt-2 bg-light">
        <Col md="4">
          <img src={about1} alt="" className="img-fluid" />
        </Col>
        <Col md="7">
          <h2 className="text-center about-heading">What do we do?</h2>
          <p className="text-center about-text">
            People have always had difficulty in finding good rentals or tenants
            with proper amenities, or they have difficulty finding respectable
            tenants. This is where our personal preferences play a crucial role.
            Everyone wants a carefree, relaxed, and hassle-free life. MONKHOOD
            LIVING SOLUTIONS strives to eliminate all your rental hassles, no
            matter if you are renting or providing a rental. Customers have
            always been our number one priority. We envision serving our owners
            and tenants with the most relaxed renting and renting-out experience
            possible.
          </p>
        </Col>
      </Row>
    </div>
  );
}

export default AboutBottom;
