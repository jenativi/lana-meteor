import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row } from 'react-bootstrap';

const FooterMenu = () => (
  <Row id="bottom" className="align-items-center justify-content-center text-center custom-bg-black custom-text-yellow pt-3">
    <p className="mb-0"> © 2023 Polydor Records</p>
    <div className="row justify-content-center pt-0">
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <div className="col-auto px-1"><a>PRIVACY</a></div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <div className="col-auto px-1"><a>SAFE SURF</a></div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <div className="col-auto px-1"><a>TERMS</a></div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <div className="col-auto px-1"><a>COOKIES</a></div>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <div className="col-auto px-1"><a>DO NOT SELL MY PERSONAL INFORMATION</a></div>
    </div>
  </Row>
);

export default FooterMenu;
