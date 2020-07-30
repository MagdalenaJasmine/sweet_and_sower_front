import React from "react";
import { connect } from "react-redux";

const CartSubmit = ({ cartProps }) => {
  console.log("CARTSUBMIT PROPS", cartProps);

  return (
    <div>
      <h3>Success! Your cart has been submitted</h3>
      {cartProps.cartItems.map((item) => (
        <div>
          <div> Item: {item.name}</div>
          <div>Servings: {item.quantity}</div>
          <div> Price: ${(item.price_in_cents * item.quantity) / 100}</div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps)(CartSubmit);
