import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import "../styles/login.css";

function LoginForm() {
  return (
    <Container>
      <Row className="login-page justify-content-center">
        <Col md="4" className="card shadow pb-4">
          <h1 className="text-center login-heading">LOGIN</h1>
          <hr />
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button className="mx-auto login-button">Submit</Button>
            <br />
            <a href="/forgetpassword" className="forget">
              Forgot Your Password ?{" "}
            </a>{" "}
            <br />
            <a href="/signup" className="forget">
              New User ? Register
            </a>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
