import React from "react";
import ItemCard from "./ItemCard";

class ItemContainer extends React.Component {
  render() {
    const itemsArray = this.props.items;

    return (
      <div className="items_cards">
        <div className="row">
          {itemsArray.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    );
  }
}

export default ItemContainer;
