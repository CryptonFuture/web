import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";

const PriceForm = () => {
  return (
    <div>
      <Card className="mt-5">
        <Card.Body>
          <Card.Title className="fw-bold">Calculate the price of</Card.Title>
          <Card.Title className="fw-bold">your order:</Card.Title>

          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Row>
            <Col md={6}>
              <h6>No of Pages</h6>
              <small>275 words</small>
            </Col>
            <Col md={6}>
              <Form.Select aria-label="Default select example" className="mb-3">
                <option>Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Open this select menu</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>

          <Row>
            <Col md={6}>
              <h6>$12.99 per page</h6>
            </Col>
            <Col md={6}>
              <h4 className="fw-bold text-end">$12.99</h4>
            </Col>
          </Row>

          <div className="d-grid gap-2">
            <Button variant="primary">Order Now</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PriceForm;
