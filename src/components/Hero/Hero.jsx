import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import PriceForm from "../price-form/PriceForm";

const Hero = () => {
  return (
    <div>
      <section className="bg-image">
        <section className="bg-color">
          <Container className="py-5 ">
            <Row className="align-items-center">
              <Col md={8}>
                <h1 className="text-white">Essay Writing</h1>
                <h1 className="text-white">Service by Experts</h1>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </Col>
              <Col md={4}>
                <PriceForm />
              </Col>
            </Row>
          </Container>
        </section>
      </section>
    </div>
  );
};

export default Hero;
