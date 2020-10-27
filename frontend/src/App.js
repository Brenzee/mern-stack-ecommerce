import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'

//Components
import Header from './components/Header'

//Pages
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/products' component={ProductsPage} />
          <Route path='/cart' component={CartPage} />
          <Route exact path='/' component={HomePage} />
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App
