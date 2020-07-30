import React from "react";
import {
  CardGroup,
  Button,
  Card,
  CardDeck,
  Container,
  Row,
  Col,
} from "react-bootstrap";

const ItemCard = (props) => {
  return (
    <CardDeck>
      <Card border="secondary" style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src="https://techcrunch.com/wp-content/uploads/2017/04/plated_panko_crusted_salmon_recipe.jpg?w=430&h=230&crop=1"
        />
        <Card.Body>
          <Card.Title className="card_title">Drop-Off Meal</Card.Title>
          <Card.Text className="card_text">
            Sometimes you don't feel like cooking dinner, but you also don't
            feel like going out. Sweet & Sowers can also provide, what we call,
            drop off meals. A meal that is mostly prepared, and only requires
            light cooking or reheating. The home meals are dropped off in
            Tupperware containers at your home.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.farmfreshri.org/wp-content/uploads/2017/10/FFRI_VeggieBox-featured.jpg"
        />
        <Card.Body>
          <Card.Title className="card_title">Market Box</Card.Title>
          <Card.Text className="card_text">
            One new way we are supporting local farmers is through our weekly
            market bags. Each week we pick a handful of farmers from the Ferry
            Building farmers market, and showcase their produce. We package and
            deliver those market bags throughout the city.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default ItemCard;
