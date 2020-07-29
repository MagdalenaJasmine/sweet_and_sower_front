import React, { useEffect } from "react";
// import { NavLink } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import { Nav } from "react-bootstrap";
import { connect } from "react-redux";
import { getNumbers } from "../actions.js/getAction";

const Navbar = ({ handleLogout, loggedInStatus, cartProps }) => {
  console.log("Navbar CartProps", cartProps);

  useEffect(() => {
    getNumbers();
  }, []);

  return (
    <Nav className="nav" defaultActiveKey="/home">
      <NavigationLink class="nav_link" link="/" text="Home" />
      <NavigationLink class="nav_link" link="/cart" text="Cart" />
      <span>{cartProps.cartNumbers}</span>

      {loggedInStatus ? (
        <>
          <NavigationLink class="nav_link" link="/new_menu" text="New Menu" />
          <NavigationLink class="nav_link" link="/menues" text="See Menues" />

          <NavigationLink
            class="nav_link"
            link="/login"
            text="Logout"
            handleLogout={handleLogout}
          />
        </>
      ) : (
        <>
          <NavigationLink class="nav_link" link="/signup" text="Signup" />
          <NavigationLink class="nav_link" link="/login" text="Login" />
        </>
      )}
    </Nav>
  );
};

const mapStateToProps = (state) => ({
  cartProps: state.cartState,
});
export default connect(mapStateToProps, { getNumbers })(Navbar);
