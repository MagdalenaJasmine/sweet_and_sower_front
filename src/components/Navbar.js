import React from "react";
import { NavLink } from "react-router-dom";
// import NavigationLink from "./NavigationLink";

const Navbar = (props) => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light"
      style={{ background: "#FFE973" }}
    >
      <div className="collapse navbar-collapse">
        <NavLink to="/" exact>
          Home
        </NavLink>
        {props.currentUser.email ? (
          <a className="item">
            <div onClick={props.handleLogout}> Sign Out </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
