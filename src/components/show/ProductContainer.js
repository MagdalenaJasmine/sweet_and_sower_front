import React from "react";
import api from "../services/api";
class ProductContainer extends React.Component {
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
      <div>
        <ItemCard items={this.state.items}></ItemCard>
      </div>
    );
  }
}

export default ProductContainer;
