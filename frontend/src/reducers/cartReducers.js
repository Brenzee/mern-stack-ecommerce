import { CART_ADD, CART_REMOVE } from '../constants/cartConstants'

export const cartReducer = (
  state = { cartItems: [], shippingAddress: {} },
  action
) => {
  switch (action.type) {
    case CART_ADD:
      const cartItems = state.cartItems

      if (cartItems) {
        const cart = cartItems.filter(
          (item) => item.product !== action.payload.product
        )
        console.log(cart)
        return { ...state, cartItems: [...cart, action.payload] }
      } else {
        return { ...state, cartItems: [action.payload] }
      }

    case CART_REMOVE:
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x.product !== action.payload),
      }
    default:
      return state
  }
}
