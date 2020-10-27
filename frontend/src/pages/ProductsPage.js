import React from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from '../components/ProductsPageComponents/ProductCard'

const ProductsPage = () => {
  return (
    <>
      <Row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </Row>
    </>
  )
}

export default ProductsPage
