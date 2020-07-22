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
    const mealsArray = this.state.items;
    let meals = mealsArray.filter(
      (meal) => meal.product_type === "drop off meal "
    );

    let mains = meals.filter((meal) => meal.category === "Main ");
    let sides = meals.filter((meal) => meal.category === "Sides");
    let desserts = meals.filter((meal) => meal.category === "Dessert ");

    return (
      <Card border="secondary" style={{ width: "25rem" }}>
        <Card.Img
          variant="top"
          src="https://techcrunch.com/wp-content/uploads/2017/04/plated_panko_crusted_salmon_recipe.jpg?w=430&h=230&crop=1"
        />
        <Card.Body>
          <Card.Title>This Week's Meal</Card.Title>
          <Card.Text>
            <div>
              <h5>Main:</h5>
              {mains.map((main) => (
                <div>{main.name}</div>
              ))}
            </div>
            <div>
              <h5>Sides:</h5>
              {sides.map((side) => (
                <div>{side.name}</div>
              ))}
            </div>
            <div>
              <h5>Dessert:</h5>
              {desserts.map((dessert) => (
                <div>{dessert.name}</div>
              ))}
            </div>
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
