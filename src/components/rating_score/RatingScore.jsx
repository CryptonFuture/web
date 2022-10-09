import React from "react";
import Rating from "../rating/Rating";
import { Container, Row, Col, Card } from "react-bootstrap";

const RatingScore = () => {
  return (
    <div>
        <Container>
      <Row>
        <Col md={12}>
            <Card>
                <Rating name="jgnfjgnfjgn" />
                <Rating name="jgnfjgnfjgn" />
                <Rating name="jgnfjgnfjgn" />
            </Card>
          
        </Col>
        
      </Row>
      </Container>
    </div>
  );
};

export default RatingScore;
