import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import { Nav } from "react-bootstrap";
import NavBar from "react-bootstrap/Navbar";
import { connect } from "react-redux";
import { getNumbers } from "../actions.js/getAction";
import logo from "../images/Sweet_Sowers.png";
import cart from "../images/Group.png";
import home from "../images/Home.png";
import login from "../images/login.png";

const Navbar = ({ handleLogout, loggedInStatus, cartProps, adminStatus }) => {
  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <Nav className="nav" defaultActiveKey="/home">
      <NavBar.Brand className="logo" href="/">
        <img src={logo} alt="logo" />
      </NavBar.Brand>
      <NavBar.Brand className="home" href="/">
        <img src={home} alt="home" />
      </NavBar.Brand>
      <NavigationLink class="nav_link" link="/cart" text="Cart" />
      <span className="cart">{cartProps.cartNumbers}</span>

      {loggedInStatus ? (
        <>
          {adminStatus ? (
            <>
              <NavigationLink
                class="nav_link"
                link="/new_menu"
                text="Add Items"
              />
              <NavigationLink
                class="nav_link"
                link="/menues"
                text="All Items"
              />
            </>
          ) : null}

          <NavigationLink
            className="logout"
            link="/login"
            text="Logout"
            handleLogout={handleLogout}
          />
        </>
      ) : (
        <>
          <NavigationLink class="nav_link" link="/signup" text="Signup" />
          <NavigationLink class="nav_link" link="/login" text="Login" />
          {/* <NavBar.Brand className="loginIcon" href="/login">
            <img src={login} alt="login" />
          </NavBar.Brand> */}
        </>
      )}
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps, { getNumbers })(Navbar);
