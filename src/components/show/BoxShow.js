import React from "react";
import api from "../../services/api";
import { CardGroup, Button, Card, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { addBasket } from "../../actions.js/addAction";

class BoxShow extends React.Component {
  render() {
    const itemsArray = this.props.items;
    // console.log("ITEMS", this.props.items);
    // console.log("ITEMS ARRAY", itemsArray);
    return itemsArray.map((item) => (
      <Col sm="4">
        <Card border="secondary" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src="https://images.squarespace-cdn.com/content/v1/5e7496643b423e725626f39f/1584744583760-ZSKS6MLBBB4HEG8S5H23/ke17ZwdGBToddI8pDm48kPTrHXgsMrSIMwe6YW3w1AZ7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k5fwC0WRNFJBIXiBeNI5fKTrY37saURwPBw8fO2esROAxn-RKSrlQamlL27g22X2A/f2a82b_b1f5b5ab7a9a44bf94cf6db70e669d93_mv2_d_4608_2592_s_4_2.jpg?format=2500w"
          />
          <Card.Body>
            <Card.Title>{item.name} </Card.Title>
            <Card.Text>
              <div>
                About this Item
                <div>{item.description}</div>
              </div>
              <div>Delivery Date: {item.delivery_date} </div>
              <div>Price: ${item.price}.00</div>
            </Card.Text>
          </Card.Body>
          <Button className="button" onClick={() => this.props.addBasket(item)}>
            Add to Cart
          </Button>
        </Card>
      </Col>
    ));
  }
}

export default connect(null, { addBasket })(BoxShow);
