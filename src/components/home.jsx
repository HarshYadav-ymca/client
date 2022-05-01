import React from "react";
import "../styles/home.css";
import { Button, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div className="home d-flex justify-content-center">
      <Row>
        <Col md="6" className="home-text">
          <h2 className="text-center">
            <strong>ONE STOP SOLUTION FOR ALL YOUR RENTING</strong>
          </h2>
          <h3 className="text-center mt-2">
            hassle free real estate and furniture renting at ease
          </h3>
          <Button className="mt-2 btn-light">Rent Now</Button>
        </Col>
      </Row>
    </div>
  );
}

export default Home;
