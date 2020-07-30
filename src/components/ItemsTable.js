import React from "react";
import Table from "react-bootstrap/Table";
import BootstrapTable from "react-bootstrap-table-next";
import cellEditFactory from "react-bootstrap-table2-editor";
import { Container, Row, Button } from "react-bootstrap";

const ItemsTable = (props) => {
  const items = props.item;
  return (
    <Container>
      <Row>
        <h3 className="header_text">All Menu Items</h3>
      </Row>
      <Row>
        <Table className="mt-4 ml-7 mr-7 mb-4" striped bordered hover>
          <thead className="card_text">
            <tr>
              <th>Item</th>
              <th>Item Type</th>
              <th>Item Name</th>
              <th>Description</th>
              <th>Delivery Date</th>
              <th>Price</th>
              <th>Category</th>
              <th></th>
            </tr>
          </thead>
          <tbody className="card_text">
            {items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.delivery_date}</td>
                <td>${item.price_in_cents / 100}</td>
                <td>{item.product_type}</td>
                <td>
                  <Button>Edit</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Row>
    </Container>
  );
};

export default ItemsTable;
