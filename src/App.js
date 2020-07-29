import React, { Component } from "react";
import { Route, Switch, withRouter, Redirect } from "react-router-dom";
import Home from "./components/HomeContainer";
import Login from "./components/sessions/Login";
import Navbar from "./components/Navbar";
import Signup from "./components/sessions/Signup";
import api from "./services/api";
import ItemCreate from "./components/admin/ItemCreate";
import EditMenu from "./components/EditMenu";
import "bootstrap/dist/css/bootstrap.min.css";
import BoxShow from "./components/show/BoxShow";
import Cart from "./components/Cart";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: { currentUser: {} },
      isLoggedIn: false,
      items: [],
    };
  }

  componentDidMount() {
    api.items.getItems().then((items) => {
      this.setState({ items: items });
    });
    const token = localStorage.getItem("token");

    if (token) {
      api.auth.getCurrentUser().then((user) => {
        console.log("CURRENT USER", user);
        const currentUser = { currentUser: user };
        this.setState({ auth: currentUser, isLoggedIn: true });
      });
    }
  }
  handleLogin = (user) => {
    const currentUser = { currentUser: user };
    localStorage.setItem("token", user.authentication_token);

    this.setState({ auth: currentUser, isLoggedIn: true });
  };

  handleLogout = (user) => {
    this.setState({ auth: { currentUser: {} } });
    localStorage.removeItem("token");
  };

  render() {
    // console.log("loggedin", this.state.isLoggedIn);
    const { auth } = this.state;
    return (
      <div className="App">
        <Navbar
          currentUser={auth.currentUser}
          loggedInStatus={this.state.isLoggedIn}
          handleLogout={this.handleLogout}
        />
        <Switch>
          <div>
            <Route
              exact={true}
              path="/"
              render={(props) => {
                return (
                  <Home
                    {...props}
                    loggedInStatus={this.state.isLoggedIn}
                    handleLogin={this.handleLogin}
                    items={this.state.items}
                  />
                );
              }}
            />
            <Route
              path="/login"
              render={(props) => {
                return (
                  <Login
                    {...props}
                    loggedInStatus={this.state.isLoggedIn}
                    handleLogin={this.handleLogin}
                  />
                );
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
            <Route
              path="/menues"
              render={(props) => {
                return (
                  <EditMenu
                    {...props}
                    handleLogin={this.handleLogin}
                    items={this.state.items}
                  />
                );
              }}
            />
            <Route
              path="/meal"
              render={(props) => {
                return (
                  <BoxShow
                    {...props}
                    handleLogin={this.handleLogin}
                    items={this.state.items}
                  />
                );
              }}
            />
            {/* <Route
                path="/market_box"
                render={(props) => {
                  return (
                    <BoxShow
                      {...props}
                      handleLogin={this.handleLogin}
                      items={this.state.items}
                    />
                  );
                }}
              /> */}
            <Route
              path="/cart"
              render={(props) => {
                return <Cart {...props} handleLogin={this.handleLogin} />;
              }}
            />
          </div>
        </Switch>
      </div>
    );
  }
}

export default App;
