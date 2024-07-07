import React from "react";
import { NavLink } from "react-router-dom";
function Nav() {
  return (
    <nav>
      <ul className="flex gap-10 capitalize justify-center text-3xl">
        <NavLink
          style={(e) => {
            return {
              color: e.isActive ? "red" : "",
              fontWeight: e.isActive ? "semibold" : "",
              textDecoration: e.isActive ? "underline" : "",
            };
          }}
          to="/"
        >
          Home
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-red-500" : "",
              e.isActive ? "font-semibold" : "",
              e.isActive ? "underline" : "",
            ].join(" ");
          }}
          to="/user"
        >
          user
        </NavLink>
        <NavLink
          className={(e) => {
            return [
              e.isActive ? "text-red-500" : "",
              e.isActive ? "font-semibold" : "",
              e.isActive ? "underline" : "",
            ].join(" ");
          }}
          to="/about"
        >
          about
        </NavLink>
      </ul>
    </nav>
  );
}

export default Nav;
