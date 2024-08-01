// eslint-disable-next-line no-unused-vars
import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { Button, Navbar, Nav, Container } from 'react-bootstrap';

function Header() {
  return (
    <>
      <div className='scroller-watcher'></div>
      <div className="space"></div>
      <Navbar collapseOnSelect expand="lg" bg="#FDEFE9" variant="light" className="navbar">
        <Container className='main_contain container'>
          <Navbar.Brand as={Link} to="/" className='logo_nav'>Siliconverse</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="custom-toggler">
            <i className="fas fa-bars" style={{ color: '#FF5F15' }}></i>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav" className="navbar-collapse">
            <Nav className="me-auto nav-links">
              <Nav.Link as={Link} to="/" className='lnk'>Home</Nav.Link>
              <Nav.Link as={Link} to="/our-mission" className='lnk'>Our mission</Nav.Link>
              <Nav.Link as={Link} to="/about-us" className='lnk'>About us</Nav.Link>
              <Nav.Link as={Link} to="/interns" className='lnk'>Interns</Nav.Link>
              <Nav.Link as={Link} to="/hire-interns" className='lnk'>Hire Interns</Nav.Link>
            </Nav>
            <Nav className="nav-buttons">
              <Nav.Link as={Link} to="/login" className='lg-in-main'>
                <Button variant="outline-primary" className='lg_in' style={{ borderColor: '#FF5F15', color: '#000000', fontFamily: 'poppins', fontWeight: '600', fontSize: '16px', borderRadius:'40px' }}>Sign in</Button>
              </Nav.Link>
              <Nav.Link as={Link} to="/register" className='rg'>
                <Button variant="primary" className='registr' style={{ background: '#FF5F15', border: 'none', width: '193px', height: '44px', fontSize: '16px', fontWeight: '600', fontFamily: 'poppins', borderRadius:'40px' }}>Create Account</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;