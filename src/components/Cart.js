import React from "react";
import { connect } from "react-redux";
import CartCard from "./CartCard";
import { Button, Container, Col } from "react-bootstrap";

function Cart({ cartProps, history }) {
  let itemsInCart = cartProps.cartItems;
  let itemPrices = itemsInCart.map((item) => item.price_in_cents);
  console.log("ITEMSINCART", itemPrices);

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
    <Container fluid>
      <Col md={{ span: 6, offset: 4 }} className="header_text">
        Please Review Your Order{" "}
      </Col>
      {itemsInCart.map((item) => (
        <div>
          <Col md={{ span: 6, offset: 4 }} xs="2">
            <CartCard item={item}></CartCard>
          </Col>
        </div>
      ))}
      <Col md={{ span: 6, offset: 4 }}>
        <Button className="button" onClick={handleClick}>
          Submit Your Order
        </Button>
      </Col>
      <Col md={{ span: 6, offset: 4 }}>
        <div className="card_text">
          Total Items ({itemsInCart.length}) ${}
        </div>
      </Col>
    </Container>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps)(Cart);
