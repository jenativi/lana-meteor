import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import { Facebook, Instagram, Apple, Spotify, Youtube, Tiktok } from 'react-bootstrap-icons';

const TopMenu = () => (
  <Navbar className="custom-bg-black custom-text-yellow" expand="lg">
    <Nav className="me-auto">
      <Nav.Link className="custom-text-yellow p-1"><Apple /></Nav.Link>
      <Nav.Link className="custom-text-yellow p-1"><Spotify /></Nav.Link>
      <Nav.Link className="custom-text-yellow p-1"><Facebook /></Nav.Link>
      <Nav.Link className="custom-text-yellow p-1"><Youtube /></Nav.Link>
      <Nav.Link className="custom-text-yellow p-1"><Instagram /></Nav.Link>
      <Nav.Link className="custom-text-yellow p-1"><Tiktok /></Nav.Link>
    </Nav>
    <Nav className="justify-content-end">
      <Nav.Link className="custom-text-yellow">LIVE DATES</Nav.Link>
      <Nav.Link className="custom-text-yellow">SIGN UP</Nav.Link>
    </Nav>
  </Navbar>
);

export default TopMenu;
