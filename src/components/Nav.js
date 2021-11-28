import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <h1> AI Monitor Pi</h1>
      <ul>
        <li>
          <Link style={{ textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link style={{ textDecoration: "none" }} to="/event">
            Event
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
