import React from "react";
import api from "../../services/api";
import { Button, Form } from "react-bootstrap";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      error: false,
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = (e) => {
    const { email, password } = this.state;
    e.preventDefault();
    api.auth.login({ email, password }).then((user) => {
      if (user.error) {
        this.setState({ error: true });
      } else {
        console.log("resp from logging in", user);
        this.props.handleLogin(user);
        this.props.history.push("/");
      }
    });
  };

  render() {
    console.log(this.props);
    const { email, password } = this.state;
    return (
      <div>
        {this.state.error ? (
          <h1 className="error">
            {" "}
            Oops something went wrong. Please try again{" "}
          </h1>
        ) : null}
        <Form className="form" onSubmit={this.handleSubmit}>
          <Form.Label className="header">Please Login</Form.Label>
          <div>
            <Form.Group className="card_text" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                name="email"
                placeholder="Email"
                id="inputEmail"
                value={email}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <div>
            <Form.Group className="card_text" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Password"
                id="inputPassword"
                value={password}
                onChange={this.handleChange}
              />
            </Form.Group>
          </div>
          <Button type="submit" value="Login" className="button">
            Login
          </Button>
        </Form>
      </div>
    );
  }
}

export default Login;
