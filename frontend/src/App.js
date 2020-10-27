import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter, Route } from 'react-router-dom'

//Components
import Header from './components/Header'

//Pages
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import CartPage from './pages/CartPage'
import SingleProductPage from './pages/SingleProductPage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main className='py-3'>
        <Container>
          <Route exact path='/products' component={ProductsPage} />
          <Route exact path='/products/:id' component={SingleProductPage} />
          <Route path='/cart' component={CartPage} />
          <Route exact path='/' component={HomePage} />
        </Container>
      </main>
    </BrowserRouter>
  )
}

export default App
