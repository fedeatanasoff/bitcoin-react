import React, { Component } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "./logo.png";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Link to="/">
          <img src={logo} alt="logo" className="Header-logo" />
        </Link>
      </div>
    );
  }
}

export default Header;
