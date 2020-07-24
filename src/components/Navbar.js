import React from "react";
// import { NavLink } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import { Nav } from "react-bootstrap";

const Navbar = ({ handleLogout, loggedInStatus }) => {
  return (
    <Nav className="nav" defaultActiveKey="/home">
      <NavigationLink class="nav_link" link="/" text="Home" />

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

export default Navbar;
