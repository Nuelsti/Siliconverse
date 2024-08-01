// eslint-disable-next-line no-unused-vars
import React from 'react'
import './body.css'
import Image from '../img/landing_image.png'
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Button, Navbar, Nav, Container } from 'react-bootstrap';


function Body() {
    return (
        <div className="body">
            <div className="body__container container">
                <div className="body__text">
                    <h1 className="body__title">Digital platform designed to connect Tech Startups, SMEs, and Tech Talents.</h1>
                    <h2 className="body__description">A Job Portal for internships and Silicon Magazine for
                    industry insights and success stories.</h2>
                    <Nav className="body__buttons">              
                        <Nav.Link as={Link} to="/register" className='rg'>
                            <Button variant="primary" className='registr' style={{ background: '#FF5F15', borderRadius: '40px', width: '193px', height: '44px', fontSize: '16px', fontWeight: '600', fontFamily: 'poppins', borderColor:'#FF5F15' }}>Get started</Button>
                        </Nav.Link>
                    </Nav>
                   
                </div>
                <div className="body__image">
                    <img src={Image} alt="Landing Image"/>
                    
                </div>
            </div>
        </div>
        
    )
}

export default Body
