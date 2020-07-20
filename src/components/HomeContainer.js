import React from "react";
import api from "../services/api";
import ItemCard from "./ItemCard";
class HomeContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    api.items.getItems().then((items) => {
      this.setState({ users: items });
    });
  }

  render() {
    return (
      <div>
        <ItemCard users={this.state.users} />
      </div>
    );
  }
}

export default HomeContainer;
