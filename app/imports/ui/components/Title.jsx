import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';

const Title = () => (
  <Container className="custom-bg-black custom-text-yellow">
    <Row className="align-items-center justify-content-center">
      <Col xs={12} md={8} lg={6} className="text-center"> {/* Adjust the md and lg sizes as needed */}
        <h1>Lana Del Rey</h1>
        <h4 className="fs-6">New Album Out Now</h4>
      </Col>
    </Row>
  </Container>
);

export default Title;
