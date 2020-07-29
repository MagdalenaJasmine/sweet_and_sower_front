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
