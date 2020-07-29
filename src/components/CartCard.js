import React from "react";
import { Card, Button } from "react-bootstrap";
import { itemQuantity, postToUpdateQuantity } from "../actions.js/itemQuantity";
import { connect } from "react-redux";

function CartCard({ item, itemQuantity, dispatch }) {
  console.log("cart card", item);
  const price = (item.price_in_cents * item.quantity) / 100;

  const handleIncreaseClick = (e) => {
    e.preventDefault();
    dispatch(itemQuantity("increase", item));
    dispatch(postToUpdateQuantity(item, { action_type: "add_item" }));
  };

  const handleDecreaseClick = (e) => {
    e.preventDefault();
    dispatch(itemQuantity("decrease", item));
    dispatch(postToUpdateQuantity(item, { action_type: "remove_item" }));
  };

  return (
    <div>
      <Card id={item.id}>
        <Card.Body>
          <Card.Title>{item.name} </Card.Title>
          <Card.Text>
            <div>
              <div>Delivery Date: {item.delivery_date} </div>
              <div>Price: ${price}</div>
              <div className="quantity">
                <div>
                  <Button className="button" onClick={handleIncreaseClick}>
                    {" "}
                    +{" "}
                  </Button>
                  Quantity: {item.quantity}
                  <Button className="button" onClick={handleDecreaseClick}>
                    {" "}
                    -{" "}
                  </Button>
                </div>
              </div>
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});

const mapDispatchToProps = (dispatch) => ({
  itemQuantity,
  postToUpdateQuantity,
  dispatch,
});
export default connect(mapStateToProps, mapDispatchToProps)(CartCard);
