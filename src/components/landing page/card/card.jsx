// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import './card.css'

// eslint-disable-next-line react/prop-types
const Card = ({ image, title, description, link }) => {
  return (
    <div className="magazine">
      <div className="magazine__prof_pic">
        <img src={image} alt="logo" />
      </div>
      <div className="magazine__text">
        <h1 className="magazine__title">{title}</h1>
        <h2 className="magazine__description">{description}</h2>
        <div className="magazine__more_info">
          <div className="magazine__sub-text">Click here to see our magazine</div>
          <Nav className="magazine__buttons">
            <Nav.Link as={Link} to={link} className="magazine__btns">
              <Button variant="primary" className="registr" style={{ background: '#FF5F15', borderRadius: '10px', width: 'auto', height: '40px', fontSize: '16px', fontWeight: '600', fontFamily: 'poppins', borderColor: '#FF5F15', letterSpacing: '1px' }}>
                Magazine
              </Button>
            </Nav.Link>
          </Nav>
        </div>
      </div>
    </div>
  );
};

export default Card;