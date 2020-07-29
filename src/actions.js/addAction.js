import { GET_NUMBERS_BASKET } from "./types";

export const addBasket = (item) => {
  return (dispatch) => {
    console.log("product:", item);
    dispatch({
      type: GET_NUMBERS_BASKET,
      payload: item,
    });
  };
};
