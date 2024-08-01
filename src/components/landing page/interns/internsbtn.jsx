import React from 'react'
import { Link } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import { Button, Navbar, Nav, Container } from 'react-bootstrap';
import './internbtn.css'



function Internsbtn() {
    return (
        <div className="intern__btn">
            {/* <Nav className="int__bns">              
                        <Nav.Link as={Link} to="/register" className='rg'>
                            <Button variant="primary" className='registr' style={{ background: 'black', border: '10px', width: '322px', height: '66px', fontSize: '24px', fontWeight: '600', fontFamily: 'poppins' }}>Apply for Internship</Button>
                        </Nav.Link>
            </Nav>
            <Nav className="int__bns1">              
                        <Nav.Link as={Link} to="/register" className='rg'>
                            <Button variant="primary" className='registr' style={{ }}>Get Interns</Button>
                        </Nav.Link>
                    </Nav> */}
                    <button className="intern__apply">Apply for Internship</button>
                    <button className="intern__get">Get Interns</button>
                
        </div>
        
    )
}

export default Internsbtn
