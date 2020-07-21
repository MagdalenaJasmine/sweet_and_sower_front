import React from "react";
// import { NavLink } from "react-router-dom";
import NavigationLink from "./NavigationLink";
import { Nav } from "react-bootstrap";

const Navbar = ({ handleLogout, loggedInStatus }) => {
  return (
    <Nav variant="pills" defaultActiveKey="/home">
      <NavigationLink link="/" text="Home" />
      <NavigationLink link="/signup" text="Signup" />
      <NavigationLink link="/login" text="Login" />

      {loggedInStatus ? (
        <>
          <NavigationLink link="/new_menu" text="New Menu" />
          <NavigationLink link="/menues" text="See Menues" />

          <NavigationLink
            link="/login"
            text="Logout"
            handleLogout={handleLogout}
          />
        </>
      ) : null}
      {/* <NavLink to="/" exact>
          Home
        </NavLink>
        {loggedInStatus ? (
          <a className="item">
            <div onClick={handleLogout}> Sign Out </div>
          </a>
        ) : (
          <NavLink to="/login" exact>
            Login
          </NavLink>
        )}
        <NavLink to="/signup" exact>
          Signup
        </NavLink>
        <NavLink to="/new_menu" exact>
          New Menu
        </NavLink>
        <NavLink to="/menues" exact>
          Menues
        </NavLink> */}
    </Nav>
  );
};

export default Navbar;
