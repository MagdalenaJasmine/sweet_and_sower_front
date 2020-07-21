import React from "react";
import Table from "react-bootstrap/Table";
// import Table from "bootstrap";

const ItemCard = (props) => {
  return (
    <Table responsive variant="dark">
      <thead>
        <tr>
          <th>Item</th>
          <th>Item Type</th>
          <th>Item Name</th>
          <th>Description</th>
          <th>Delivery Date</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{props.item.id}</td>
          <td>{props.item.category}</td>
          <td>{props.item.name}</td>
          <td>{props.item.description}</td>
          <td>{props.item.delivery_date}</td>
          <td>{props.item.price}</td>
          <td>{props.item.product_type}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default ItemCard;
