import React from "react";
import { Card, Button } from "react-bootstrap";
import { itemQuantity } from "../actions.js/itemQuantity";
import { connect } from "react-redux";

function CartCard({ item, itemQuantity }) {
  console.log("cart card", item);
  const price = (item.price_in_cents * item.quantity) / 100;
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
                  <Button
                    className="button"
                    onClick={() => itemQuantity("increase", item)}
                  >
                    {" "}
                    +{" "}
                  </Button>
                  Quantity: {item.quantity}
                  <Button
                    className="button"
                    onClick={() => itemQuantity("decrease", item)}
                  >
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
export default connect(mapStateToProps, { itemQuantity })(CartCard);
