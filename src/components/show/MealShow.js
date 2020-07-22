import React from "react";
import api from "../../services/api";
import { CardGroup, Button, Card } from "react-bootstrap";

class MealShow extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    api.items.getItems().then((items) => {
      this.setState({ items: items });
    });
  }

  render() {
    return (
      <Card border="secondary" style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://techcrunch.com/wp-content/uploads/2017/04/plated_panko_crusted_salmon_recipe.jpg?w=430&h=230&crop=1"
        />
        <Card.Body>
          <Card.Title>This Week's Meal</Card.Title>
          <Card.Text>
            <div>Main</div>
            <div>Sides</div>
            <div>Dessert</div>
            <div>Delivery Date: </div>
            <div>Price</div>
          </Card.Text>
        </Card.Body>
        <Button className="button" href="/meal">
          Add to Cart
        </Button>
      </Card>
    );
  }
}

export default MealShow;
