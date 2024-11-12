import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/logo.png';
import "../styles/navbar.css"

function NavigationBar() {
    return (
        <Navbar expand="lg" className="bg-color">
            <Container className=''>
                <Navbar.Brand to="/" as={Link} className='text-white'>
                    
                        <img src={Logo} alt="Logo" style={{ width: '50px' }} />
                        SuperKebab
                    
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ borderColor: 'white' }} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className='ms-auto'>
                        <Nav.Link to="/" as={Link} className='text-white hover-efect'>Home</Nav.Link>
                        <Nav.Link to="" className='text-white hover-efect'>Menu</Nav.Link>
                        <Nav.Link to="" className='text-white hover-efect'>About</Nav.Link>
                        <Nav.Link to="" className='text-white hover-efect'>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    )
}

export default NavigationBar