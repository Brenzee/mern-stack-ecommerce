import React from 'react'
import {
  Row,
  Alert,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri'
import { removeFromCart } from '../actions/cartActions'

const CartPage = () => {
  const dispatch = useDispatch()

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  const removeFromCartHandler = (id) => {
    dispatch(removeFromCart(id))
  }
  return (
    <Row>
      <Col md={8}>
        {cartItems.length === 0 ? (
          <Col xs={12}>
            <Alert variant='primary' className='text-center'>
              Your cart is empty! Go To <Link to='/products'>products</Link>
            </Alert>
          </Col>
        ) : (
          <ListGroup variant='flush'>
            {cartItems.map((item) => (
              <ListGroup.Item>
                <Row className='d-flex align-items-center'>
                  <Col md={2} xs={4} className='d-flex justify-content-center'>
                    <Image
                      src={item.image}
                      alt={item.name}
                      style={{ objectFit: 'cover', maxHeight: '70px' }}
                      fluid
                      rounded
                    />
                  </Col>
                  <Col md={3} xs={4}>
                    <Link to={`/products/${item.product}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} xs={4}>
                    ${item.price}
                  </Col>
                  <Col md={2} xs={3}>
                    QTY: {item.qty}
                  </Col>
                  <Col md={3} xs={9}>
                    <Button
                      type='button'
                      block
                      variant='light'
                      onClick={() => removeFromCartHandler(item.product)}
                    >
                      <RiDeleteBin6Line />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card>
          <ListGroup variant='fluid'>
            <ListGroup.Item>
              <h4>
                Subtotal: $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </h4>
            </ListGroup.Item>
            <ListGroup.Item>
              <Button type='button' className='btn-block' size='lg'>
                Proceed to Checkout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  )
}

export default CartPage
