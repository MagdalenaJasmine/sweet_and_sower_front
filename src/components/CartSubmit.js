import React from "react";
import { connect } from "react-redux";
import { Container, Card } from "react-bootstrap";

const CartSubmit = ({ cartProps, total }) => {
  let itemsInCart = cartProps.cartItems;
  let itemPrices = itemsInCart.map((item) => item.price_in_cents);
  let itemQuantities = itemsInCart.map((item) => item.quantity);

  function totalPrice() {
    const l = itemPrices.length;
    let sum = 0;

    for (var i = 0; i < l; i++) {
      sum += itemPrices[i] * itemQuantities[i];
    }

    sum = sum / 100;

    return sum;
  }

  return (
    <Container>
      <div>
        <h3 className="header_text">Success! Your cart has been submitted</h3>
        <div className="card_text">
          <div>Delivery Address:</div>
          <div>11 Tuna Lane</div>
          <div>San Francatsco, California</div>
          <div>94110</div>
        </div>
        {cartProps.cartItems.map((item) => (
          <Card className="card_text">
            <Card.Title>
              <div>Item: {item.name}</div>
              <div>Total: {totalPrice()}</div>
            </Card.Title>
            <Card.Body>
              <Card.Text>
                <div>Servings: {item.quantity}</div>
                <div>Price: ${(item.price_in_cents * item.quantity) / 100}</div>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps)(CartSubmit);
