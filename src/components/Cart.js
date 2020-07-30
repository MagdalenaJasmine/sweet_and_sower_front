import React from "react";
import { connect } from "react-redux";
import CartCard from "./CartCard";
import { Button } from "react-bootstrap";

function Cart({ cartProps, history }) {
  let itemsInCart = cartProps.cartItems;

  const handleClick = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/carts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        user_id: 1,
        action_type: "submit_cart",
      }),
    }).then((resp) => {
      history.push("/complete");
    });
  };

  return (
    <div>
      Cart
      {itemsInCart.map((item) => (
        <div>
          <div>
            <CartCard item={item}></CartCard>
          </div>
        </div>
      ))}
      <Button className="button" onClick={handleClick}>
        Submit Your Order
      </Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps)(Cart);
