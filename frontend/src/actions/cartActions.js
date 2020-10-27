import { CART_ADD, CART_ADD_FAIL } from '../constants/cartConstants'
import axios from 'axios'

export const addToCart = (id, qty) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`/api/products/${id}`)

    const cartItem = {
      product: data._id,
      name: data.name,
      price: data.price,
      image: data.image,
      qty,
    }

    dispatch({ type: CART_ADD, payload: cartItem })

    localStorage.setItem('cartItems', JSON.stringify(getState().cart.cartItems))
  } catch (error) {
    dispatch({
      type: CART_ADD_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
