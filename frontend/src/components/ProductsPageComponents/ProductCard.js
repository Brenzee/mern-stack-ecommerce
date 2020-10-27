import React from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'

const ProductCard = () => {
  return (
    <Col xs={6} md={4} lg={3}>
      <Card className='my-4 mx-2'>
        <Link to='/products/id'>
          <Card.Img
            variant='top'
            style={{ maxHeight: '200px', objectFit: 'contain' }}
            src='/images/gamingPC.jpg'
          />
        </Link>
        <Card.Body>
          <Card.Title>
            <Link to='/products/id'>Gaming PC</Link>
          </Card.Title>
          <ListGroup className='list-group-flush'>
            <ListGroup.Item>Price: 899.99 $</ListGroup.Item>

            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <LinkContainer to='/cart/?id=id'>
            <Button variant='primary' className='mt-2'>
              Add To Cart <FaShoppingCart />
            </Button>
          </LinkContainer>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard
