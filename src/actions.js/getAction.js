import { GET_NUMBERS_BASKET } from "./types";

export const getNumbers = () => {
  return (dispatch) => {
    console.log("Getting basket numbers");
    dispatch({
      type: GET_NUMBERS_BASKET,
    });
  };
};
