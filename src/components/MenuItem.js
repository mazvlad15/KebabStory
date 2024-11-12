import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MenuItem({name, description, price, image}) {
  return (
    <Card className='d-flex align-items-center justify-content-center '>
    <Card.Img src={image} variant="top"  />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
      <Card.Text>
        {description}
      </Card.Text>
      <Card.Text>
        {price} lei
      </Card.Text>
      <Button >Add to card</Button>
    </Card.Body>
  </Card>
  )
}

export default MenuItem