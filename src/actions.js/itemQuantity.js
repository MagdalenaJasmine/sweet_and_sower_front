import { INCREASE_QUANTITY, DECREASE_QUANTITY } from "./types";

export const itemQuantity = (action, item_id) => {
  return (dispatch) => {
    console.log("inside product quantity");
    console.log("action is", action);
    console.log("item id is", item_id);

    dispatch({
      type: action === "increase" ? INCREASE_QUANTITY : DECREASE_QUANTITY,
      payload: item_id,
    });
  };
};

export const postToUpdateQuantity = (item, action) => {
  console.log("ITEM IN QUANTITY", item);
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
        quantity: item.quantity,
        action_type: action.action_type,
      }),
    });
  };
};
