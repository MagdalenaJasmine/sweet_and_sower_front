import React from "react";
import { connect } from "react-redux";
import { Container, Card } from "react-bootstrap";

const CartSubmit = ({ cartProps }) => {
  console.log("CARTSUBMIT PROPS", cartProps);

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
            <Card.Title> Item: {item.name}</Card.Title>
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
