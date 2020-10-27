import { CART_ADD, CART_REMOVE } from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  const { data } = await axios.get(`/api/products/${id}`)

  const cartItem = {
    product: data._id,
    name: data.name,
    price: data.price,
    image: data.image,
    qty,
  }

  console.log(cartItem)

  dispatch({ type: CART_ADD, payload: cartItem })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}

export const removeFromCart = (id) => (dispatch, getState) => {
  dispatch({ type: CART_REMOVE, payload: id })

  localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
}
