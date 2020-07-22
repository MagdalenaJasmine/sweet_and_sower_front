import React from "react";
import Table from "react-bootstrap/Table";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";

const ItemsTable = (props) => {
  const items = props.item;
  return (
    <div>
      <h3 className="body_font">All Menu Items</h3>
      <Table className="mt-4 ml-7 mr-7 mb-4" striped bordered hover>
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
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.category}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.delivery_date}</td>
              <td>{item.price}</td>
              <td>{item.product_type}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ItemsTable;
