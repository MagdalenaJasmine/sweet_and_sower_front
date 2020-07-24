import React from "react";
import api from "../../services/api";

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
          <h1> Oops something went wrong. Please try again </h1>
        ) : null}
        <form className="form" onSubmit={this.handleSubmit}>
          <h1>Login</h1>
          <div>
            <label>Email</label>
            <input
              type="text"
              name="email"
              placeholder="Email"
              id="inputEmail"
              value={email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              id="inputPassword"
              value={password}
              onChange={this.handleChange}
            />
          </div>
          <input type="submit" value="Login" />
        </form>
      </div>
    );
  }
}

export default Login;
