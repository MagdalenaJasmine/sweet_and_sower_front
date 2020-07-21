import React from "react";
import ItemsTable from "./ItemsTable";

class ItemContainer extends React.Component {
  render() {
    const itemsArray = this.props.items;

    return (
      <div className="items_cards">
        <div className="row">
          <ItemsTable item={itemsArray} />
        </div>
      </div>
    );
  }
}

export default ItemContainer;
