import React from "react";
import { CardGroup, Button, Card } from "react-bootstrap";

const ItemCard = (props) => {
  return (
    <CardGroup>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://techcrunch.com/wp-content/uploads/2017/04/plated_panko_crusted_salmon_recipe.jpg?w=430&h=230&crop=1"
        />
        <Card.Body>
          <Card.Title>Drop-Off Meal</Card.Title>
          <Card.Text>
            Drop-off meals are weekly meals made with love. Each week we create
            a main, multiple sides and a dessert
          </Card.Text>
        </Card.Body>
      </Card>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://www.farmfreshri.org/wp-content/uploads/2017/10/FFRI_VeggieBox-featured.jpg"
        />
        <Card.Body>
          <Card.Title>Market Box</Card.Title>
          <Card.Text>Market Box Text</Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
  );
};

export default ItemCard;
