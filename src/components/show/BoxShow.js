import React from "react";
import api from "../../services/api";
import {
  CardGroup,
  Button,
  Card,
  Col,
  Container,
  Row,
  CardDeck,
} from "react-bootstrap";
import { connect } from "react-redux";
import { addBasket } from "../../actions.js/addAction";

class BoxShow extends React.Component {
  render() {
    const itemsArray = this.props.items;
    // console.log("ITEMS", this.props.items);
    // console.log("ITEMS ARRAY", itemsArray);
    return (
      <Container fluid>
        <CardDeck>
          {itemsArray.map((item) => (
            <Col xs="4">
              <Row>
                <Card border="light">
                  <Card.Img
                    variant="top"
                    src="https://d6h7vs5ykbiug.cloudfront.net/wp-content/uploads/2012/03/FarmersMarketMeal2.jpg"
                  />
                  <Card.Body>
                    <Card.Header className="card_title">
                      {item.name}{" "}
                    </Card.Header>
                    <Card.Title className="card_header">
                      About this Item:
                    </Card.Title>
                    <Card.Text className="card_text">
                      {item.description}
                    </Card.Text>
                    <Card.Footer className="card_text">
                      <div>Delivery Date: {item.delivery_date}</div>
                      <div>Price: ${item.price_in_cents / 100}</div>
                    </Card.Footer>
                  </Card.Body>
                  <Button
                    className="button"
                    size="sm"
                    onClick={() => this.props.addBasket(item)}
                  >
                    Add to Cart
                  </Button>
                </Card>
              </Row>
            </Col>
          ))}
        </CardDeck>
      </Container>
    );
  }
}

export default connect(null, { addBasket })(BoxShow);
