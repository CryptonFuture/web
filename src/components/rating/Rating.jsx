import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../components/rating/rating.css";

const Rating = ({ name }) => {
  return (
    <div>
      <Container className="card-top-margin">
        <Row>
          <Col md={4}>
            {name}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Rating;
