import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
};

const Navbar = (props) => {
  return (
    <div>
      <NavLink
        to="/"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      {props.currentUser.email ? (
        <div className="item">
          <div> Welcome {props.currentUser.email}</div>
        </div>
      ) : null}
      {props.currentUser.email ? (
        <a className="item">
          <div
            onClick={props.handleLogout}
            style={link}
            activeStyle={{
              background: "darkblue",
            }}
          >
            {" "}
            Sign Out{" "}
          </div>
        </a>
      ) : (
        <NavLink
          to="/login"
          exact
          style={link}
          activeStyle={{
            background: "darkblue",
          }}
        >
          Login
        </NavLink>
      )}
      <NavLink
        to="/signup"
        exact
        style={link}
        activeStyle={{
          background: "darkblue",
        }}
      >
        Signup
      </NavLink>
    </div>
  );
};

export default Navbar;
