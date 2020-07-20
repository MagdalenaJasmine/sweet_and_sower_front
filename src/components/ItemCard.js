import React from "react";

class ItemContainer extends React.Component {
  render() {
    const allUsers = this.props.users.map((user) => <div>{this.email}</div>);
    return <div>User works</div>;
  }
}

export default ItemContainer;
