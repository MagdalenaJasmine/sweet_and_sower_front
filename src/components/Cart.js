import React from "react";
import { connect } from "react-redux";
import CartCard from "./CartCard";
import { Button } from "react-bootstrap";

function Cart({ cartProps }) {
  let itemsInCart = cartProps.cartItems;

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
      <Button className="button">Checkout</Button>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps)(Cart);
