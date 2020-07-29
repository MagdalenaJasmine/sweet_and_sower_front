import React from "react";
import api from "../services/api";
import ItemContainer from "./ItemContainer";
class EditMenu extends React.Component {
  render() {
    console.log("Home user", this.props);
    return (
      <div>
        <ItemContainer items={this.props.items} />
      </div>
    );
  }
}

export default EditMenu;
