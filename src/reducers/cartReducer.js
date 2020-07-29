import {
  ADD_PRODUCT_BASKET,
  GET_NUMBERS_BASKET,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
} from "../actions.js/types";
import { initializeCart, addItemToCart, removeItemFromCart } from "./cartUtils";

const initialState = {
  cartNumbers: 0,
  cartCost: 0,
  cartItems: [],
};

export default (state = initialState, action) => {
  let selectedItem = "";
  switch (action.type) {
    case ADD_PRODUCT_BASKET:
      return {
        ...state,
      };

    case GET_NUMBERS_BASKET:
      return {
        ...state,
        cartNumbers: state.cartNumbers + 1,
        cartItems: initializeCart(state.cartItems, action.payload),
      };
    case INCREASE_QUANTITY:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    case DECREASE_QUANTITY:
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};
