import React from "react";
import api from "../services/api";
import ItemCard from "./Item Card";
class HomeContainer extends React.Component {
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
    console.log("Home user", this.props);
    return (
      <div>
        <ItemCard></ItemCard>
      </div>
    );
  }
}

export default HomeContainer;
