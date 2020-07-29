import { GET_NUMBERS_BASKET } from "./types";

export const addBasket = (item) => {
  return (dispatch) => {
    dispatch({
      type: GET_NUMBERS_BASKET,
      payload: item,
    });
  };
};

export const postToInitializeCart = (item, action) => {
  console.log("ITEM IN POST", item);
  return (dispatch) => {
    return fetch("http://localhost:3000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        item_id: item.id,
        quantity: 1,
        action_type: action.action_type,
      }),
    });
  };
};
