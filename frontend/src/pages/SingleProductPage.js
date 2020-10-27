import React, { useEffect, useState } from 'react'
import { Button, Row, Col, Image, ListGroup, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getProductDetails } from '../actions/productActions'
import { AiOutlineArrowLeft } from 'react-icons/ai'
import { LinkContainer } from 'react-router-bootstrap'
import { FaShoppingCart } from 'react-icons/fa'
import { addToCart } from '../actions/cartActions'

const SingleProductPage = ({ match, history }) => {
  const dispatch = useDispatch()
  const id = match.params.id

  const [qty, setQty] = useState(1)
  const [button, setButton] = useState(false)

  const productDetails = useSelector((state) => state.productDetails)
  const { loading, error, product } = productDetails

  const cart = useSelector((state) => state.cart)
  const { cartItems } = cart

  useEffect(() => {
    dispatch(getProductDetails(id))
    if (cartItems.some((item) => item.product === id)) {
      setButton(true)
    }
  }, [dispatch, id, cartItems])

  const handleAddToCart = () => {
    dispatch(addToCart(id, qty))
    history.push('/cart')
  }

  return (
    <div>
      <LinkContainer to='/products'>
        <Button
          variant='secondary'
          className='d-inline-flex align-items-center'
        >
          <AiOutlineArrowLeft fontWeight={700} fontSize={18} />
          {'  '} Go Back
        </Button>
      </LinkContainer>
      {loading ? (
        <h1>Loading</h1>
      ) : error ? (
        <h1>Error</h1>
      ) : (
        <Row className='mt-5'>
          <Col md={6} xs={12}>
            <Image
              style={{
                maxHeight: '400px',
                minWidth: '100%',
                objectFit: 'contain',
              }}
              fluid
              src={product.image}
              rounded
            />
          </Col>
          <Col md={6} xs={12}>
            <ListGroup variant='flush'>
              <ListGroup.Item className='h1'>{product.name}</ListGroup.Item>
              <ListGroup.Item className='h5'>
                {product.description}
              </ListGroup.Item>
              <ListGroup.Item className='h5'>
                Price: <strong>{product.price}</strong>$
              </ListGroup.Item>
              <ListGroup.Item className='h5 d-inline-flex justify-content-between align-items-center'>
                <div>Quantity: </div>
                <Form.Control
                  className='ml-auto w-50'
                  size='lg'
                  as='select'
                  value={qty}
                  onChange={(e) => setQty(e.target.value)}
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                  <option>7</option>
                </Form.Control>
              </ListGroup.Item>
              <ListGroup.Item className='h5'>
                <Button
                  variant='primary'
                  disabled={button}
                  block
                  size='lg'
                  onClick={handleAddToCart}
                >
                  {button ? 'Already in the cart!' : 'Add to cart'}{' '}
                  <FaShoppingCart />
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      )}
    </div>
  )
}

export default SingleProductPage
