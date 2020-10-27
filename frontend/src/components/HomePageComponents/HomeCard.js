import React from 'react'
import { Card, Col } from 'react-bootstrap'

const HomeCard = ({ title, text }) => {
  return (
    <Col xs={12} md={6} lg={3}>
      <Card
        className='m-2 p-4 flex-col align-items-center text-center justify-content-center'
        style={{ minHeight: '180px' }}
        bg='dark'
        text='white'
      >
        <Card.Title style={{ fontSize: 24 }}>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
      </Card>
    </Col>
  )
}

export default HomeCard
