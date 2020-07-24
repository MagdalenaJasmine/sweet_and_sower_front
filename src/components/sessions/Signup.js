import React from "react";
import api from "../../services/api";
import { Form, Button } from "react-bootstrap";
const API_ROOT = "http://localhost:3000";

class Signup extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
      household_size: 0,
      address: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const {
      name,
      email,
      password,
      password_confirmation,
      household_size,
      address,
    } = this.state;
    e.preventDefault();

    fetch(`${API_ROOT}/users`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        user: {
          name: name,
          email: email,
          password: password,
          password_confirmation: password_confirmation,
          household_size: household_size,
          address: address,
        },
      }),
    });
  };

  render() {
    const {
      name,
      email,
      password,
      password_confirmation,
      household_size,
      address,
    } = this.state;
    return (
      <div>
        {this.state.error ? <h1> Please try again</h1> : null}
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              name="name"
              placeholder="First, Last"
              id="inputName"
              value={name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Email"
              id="inputEmail"
              value={email}
              onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="password"
              id="inputPassword"
              value={password}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPasswordConfirmation">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password_confirmation"
              name="password_confirmation"
              placeholder="password_confirmation"
              id="inputPasswordConfirmation"
              value={password_confirmation}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formBasicAddress">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="address"
              name="address"
              placeholder="Street, City, State, Zip"
              id="inputAddress"
              value={address}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Household Size</Form.Label>
            <Form.Control
              size="sm"
              as="select"
              type="household_size"
              name="household_size"
              placeholder="First, Last"
              id="inputHousehold_Size"
              value={household_size}
              onChange={this.handleChange}
            >
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>6</option>
              <option>7</option>
              <option>8</option>
              <option>9</option>
              <option>10</option>
            </Form.Control>
          </Form.Group>
          <Button className="button" variant="primary" type="submit">
            Signup
          </Button>
        </Form>
      </div>
    );
  }
}

export default Signup;
