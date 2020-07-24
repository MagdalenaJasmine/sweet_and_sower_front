import React from "react";
import api from "../services/api";
import ItemCard from "./ItemCard";
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
    return (
      <div className="header_text">
        {" "}
        This Week's Offerings
        <div>
          <ItemCard items={this.state.items}></ItemCard>
        </div>
      </div>
    );
  }
}

export default HomeContainer;
