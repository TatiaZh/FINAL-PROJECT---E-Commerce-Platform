import React, { Component } from "react";
import "../../CSS/header.css";
import Logo from "../../images/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <div className="header__inner--wrapper">
          <div className="header__inner">
            <nav>
              <ul>
                <li>
                  {" "}
                  <a href="">Home</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Shop</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Blog</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="">Content</a>{" "}
                </li>
              </ul>
            </nav>
            <div className="header__inner__logo">
              <img src={Logo} alt="BRINE" />
            </div>
            <div className="header__inner__cart">
              <i className="fa fa-shopping-cart" />
              <span className="item-count__div">0</span>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;