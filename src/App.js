import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./components/HomeContainer";
import Login from "./components/sessions/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/sessions/Signup";
import api from "./services/api";
import ItemCreate from "./components/admin/ItemCreate";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { auth: { currentUser: {} } };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");

    if (token) {
      api.auth.getCurrentUser().then((user) => {
        console.log("CURRENT USER", user);
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser });
      });
    }
  }
  handleLogin = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.authentication_token);
    // localStorage.setItem("token", user.issue_token);

    this.setState({ auth: currentUser });
  };

  handleLogout = (user) => {
    // localStorage.removeItem("token");
    this.setState({ auth: { currentUser: {} } });
    localStorage.removeItem("token");
  };
  render() {
    const { auth } = this.state;
    return (
      <div className="App">
        <Navbar
          currentUser={auth.currentUser}
          handleLogout={this.handleLogout}
        />
        <div>
          <Route exact={true} path="/" component={Home} />
          <Route
            path="/login"
            render={(props) => {
              return <Login {...props} handleLogin={this.handleLogin} />;
            }}
          />
          <Route
            path="/signup"
            render={(props) => {
              return <Signup {...props} handleLogin={this.handleLogin} />;
            }}
          />
          <Route
            path="/new_menu"
            render={(props) => {
              return <ItemCreate {...props} handleLogin={this.handleLogin} />;
            }}
          />
        </div>
      </div>
    );
  }
}

export default App;
