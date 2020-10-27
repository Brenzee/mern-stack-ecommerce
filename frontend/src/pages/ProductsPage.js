import React, { useEffect } from 'react'
import { Row } from 'react-bootstrap'
import ProductCard from '../components/ProductsPageComponents/ProductCard'

//Redux and actions
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'

const ProductsPage = () => {
  const dispatch = useDispatch()

  const productList = useSelector((state) => state.productList)
  const { products, loading, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

  return (
    <>
      <Row>
        {loading ? (
          <h1>Loading</h1>
        ) : error ? (
          <h1>Error</h1>
        ) : (
          <>
            {products.map((product) => (
              <ProductCard
                key={product._id}
                name={product.name}
                price={product.price}
                image={product.image}
                brand={product.brand}
                id={product._id}
              />
            ))}
          </>
        )}
      </Row>
    </>
  )
}

export default ProductsPage
