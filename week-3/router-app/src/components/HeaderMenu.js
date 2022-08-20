import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const HeaderMenu = () => {
  return (
    <div className="header-menu">
      <NavLink to="/"
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
          };
        }}
      >
        HOME
      </NavLink>
      <NavLink
        to="/about"
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
      >ABOUT US
      </NavLink>
      <NavLink
        to="/pricing"
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
      >
        PRICING
      </NavLink>
      <NavLink
        to="/products"
        style={({ isActive }) => {
          return {
            display: "block",
            margin: "1rem 0",
            color: isActive ? "red" : "",
          };
        }}
      >
        Products
      </NavLink>
      {/* <a href="/">Google</a> */}
    </div>
  );
};

export default HeaderMenu;
