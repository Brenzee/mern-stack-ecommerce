import { CART_ADD, CART_ADD_FAIL } from '../constants/cartConstants'

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD:
      return { cartItems: [...state.cartItems, action.payload] }
    case CART_ADD_FAIL:
      return { cartItems: state.cartItems, error: action.payload }
    default:
      return state
  }
}
