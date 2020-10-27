import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import HomeCard from '../components/HomePageComponents/HomeCard'
import Shopping from '../components/HomePageComponents/Shopping'

const HomePage = () => {
  return (
    <div>
      <Row style={{ minHeight: '500px' }} className='align-items-center'>
        <Col md={6} sm={12} className='text-center text-md-left pt-3 pt-md-0'>
          <h1>Welcome to BrendoShop</h1>
          <Link to='/products'>
            <Button size='lg' variant='primary'>
              Shop now
            </Button>
          </Link>
        </Col>
        <Col md={6} sm={12} className='p-5 p-md-0'>
          <Shopping />
        </Col>
      </Row>
      <Row className='py-3'>
        <HomeCard
          title='Fast Delivery'
          text='Order Your products right now and get them in 2 days!'
        />
        <HomeCard
          title='Warranty'
          text='Guaranteed warranty for Your purchase'
        />
        <HomeCard
          title='Best Prices'
          text='There is not a single store with better prices!'
        />
        <HomeCard
          title='Easy Shopping'
          text='Add products to the cart and complete the checkout in a minute!'
        />
      </Row>
    </div>
  )
}

export default HomePage
