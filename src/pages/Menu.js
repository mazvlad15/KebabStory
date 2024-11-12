import React from 'react'
import { MenuItems } from '../helpers/MenuItems'
import MenuItem from '../components/MenuItem'
import { Container, Row, Col } from 'react-bootstrap'  // Import Bootstrap grid components

function Menu() {
    return (
        <Container className=''>
            <h1 className='my-5 text-center'>Menu</h1>
            <Row className=''>
                {MenuItems.map((item, key) => (
                    <Col key={key} xs={12} sm={8} md={6} lg={4} className="mb-5">
                        <MenuItem
                            name={item.name}
                            description={item.description}
                            price={item.price}
                            image={item.image}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

export default Menu
