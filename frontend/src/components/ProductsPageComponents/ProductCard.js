import React, { useEffect, useState } from 'react'
import { Button, Card, Col, ListGroup, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { FaShoppingCart } from 'react-icons/fa'
import { addToCart } from '../../actions/cartActions'

const ProductCard = ({ image, name, price, id, brand, history }) => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const [qty, setQty] = useState(1)
  const [button, setButton] = useState(false)

  useEffect(() => {
    if (cartItems.some((item) => item.product === id)) {
      setButton(true)
    }
  }, [cartItems])

  const handleAddToCart = () => {
    dispatch(addToCart(id, qty))
  }
  return (
    <Col xs={6} md={4} lg={3}>
      <Card className='my-4 mx-0' style={{ minHeight: '380px' }}>
        <Link to={`/products/${id}`}>
          <Card.Img
            variant='top'
            style={{
              maxHeight: '150px',
              objectFit: 'cover',
            }}
            src={image}
          />
        </Link>
        <Card.Body
          style={{ height: '100%' }}
          className='d-flex flex-column justify-content-between p-2 pt-4'
        >
          <Card.Title>
            <Link to={`/products/${id}`}>{name}</Link>
          </Card.Title>
          <ListGroup className='list-group-flush p-0 '>
            <ListGroup.Item className='p-0 py-2'>
              Price: {price}$
            </ListGroup.Item>
            <ListGroup.Item className='p-0 py-2'>Brand: {brand}</ListGroup.Item>
          </ListGroup>
          <Link to='/cart' onClick={handleAddToCart}>
            <Button
              variant='primary'
              className='m-0 h6'
              block
              disabled={button}
            >
              {button ? (
                <>Already in the cart!</>
              ) : (
                <>
                  Add <FaShoppingCart />
                </>
              )}
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  )
}

export default ProductCard
