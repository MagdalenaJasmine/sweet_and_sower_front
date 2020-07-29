import { ADD_PRODUCT_BASKET } from "./types";

export const getNumbers = () => {
  return (dispatch) => {
    console.log("Getting basket numbers");
    dispatch({
      type: ADD_PRODUCT_BASKET,
    });
  };
};
