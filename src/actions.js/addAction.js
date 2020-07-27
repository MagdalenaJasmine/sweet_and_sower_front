import { ADD_PRODUCT_BASKET } from "./types";

export const addBasket = (itemName) => {
  return (dispatch) => {
    console.log("adding to basket");
    console.log("product:", itemName);
    dispatch({
      type: ADD_PRODUCT_BASKET,
      payload: itemName,
    });
  };
};
