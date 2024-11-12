import React from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import ContactImage from '../assets/images/contactPage_banner_img.jpg'; 

function Contact() {
    return (
        <Container fluid className="p-0">
            <Row className="g-0">
                {/* Jumătatea cu imaginea */}
                <Col md={6} className=''>
                    <div 
                        style={{
                            backgroundImage: `url(${ContactImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            height: '100vh'
                        }}
                    >
                    </div>
                </Col>

                {/* Jumătatea cu formularul */}
                <Col md={6} className="d-flex align-items-center justify-content-center">
                    <Form style={{ width: '80%', maxWidth: '500px' }}>
                        <h1 className="text-center mb-4">Contact Us</h1>
                        <Form.Group className="mb-3" controlId="formFullName">
                            <Form.Label>Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your full name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={4} placeholder="Type your message here" />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100">
                            Contact Us
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default Contact;
