import React from "react";
import { CardGroup, Button, Card } from "react-bootstrap";

const ItemCard = (props) => {
  return (
    <CardGroup>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="src/images/meal.png" />
        <Card.Body>
          <Card.Title>Drop-Off Meal</Card.Title>
          <Card.Text>Drop off meal text</Card.Text>
        </Card.Body>
        <Button variant="primary">See Details</Button>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>Market Box</Card.Title>
          <Card.Text>Market Box Text</Card.Text>
        </Card.Body>
        <Button variant="primary">See Details</Button>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
};

export default ItemCard;
