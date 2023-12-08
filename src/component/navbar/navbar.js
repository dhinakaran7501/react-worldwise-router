import React from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="row1">
      <div className="title-name">
        <Link to={"/"}>
          <img src="./img/logo.png" alt="logo" />
        </Link>
      </div>
      <div className="buttons">
        <ul>
          <li>
            <Link to="/pricing">
              <p>Pricing</p>
            </Link>
          </li>
          <li>
            <Link to="/product">
              <p>Product</p>
            </Link>
          </li>
          <li>
            <Link to="/login">
              <p>Login</p>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
