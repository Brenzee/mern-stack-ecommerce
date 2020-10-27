import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { FiShoppingCart } from 'react-icons/fi'

const Header = () => {
  return (
    <header>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand>BrendoShop</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle
            aria-controls='basic-navbar-nav'
            style={{ border: 'none' }}
          />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/products'>
                <Nav.Link>Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  Cart <FiShoppingCart />
                </Nav.Link>
              </LinkContainer>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header
