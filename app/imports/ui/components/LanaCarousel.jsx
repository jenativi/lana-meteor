import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

const LanaCarousel = () => (
  <Carousel indicators={false} interval={null} className="custom-bg-black custom-text-yellow custom-carousel pt-3 align-items-center justify-content-center pb-5">
    <Carousel.Item className="custom-carousel-width">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col>
            <img className="carousel-image" src="/images/lanadelray-main.png" alt="First slide" />
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-3">
          <Col xs={12}>
            <h4 className="fs-6">Standard Vinyl</h4>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-2">
          <Col xs={12} md={8} lg={6}>
            <Button variant="dark" className="custom-button me-2">LISTEN/ORDER NOW</Button>
            <Button variant="dark" className="custom-button me-2">MERCH</Button>
          </Col>
        </Row>
      </Container>
    </Carousel.Item>

    <Carousel.Item className="custom-carousel-width">
      <Container>
        <Row className="justify-content-center align-items-center text-center">
          <Col>
            <img className="carousel-image" src="/images/lanadelray-main.png" alt="First slide" />
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-3">
          <Col xs={12}>
            <h4>Standard Vinyl</h4>
          </Col>
        </Row>
        <Row className="justify-content-center text-center mt-2">
          <Col xs={12} md={8} lg={6}>
            <Button variant="dark" className="custom-button me-2 fs-6">LISTEN/ORDER NOW</Button>
            <Button variant="dark" className="custom-button me-2 fs-6">MERCH</Button>
          </Col>
        </Row>
      </Container>
    </Carousel.Item>
  </Carousel>
);

export default LanaCarousel;
