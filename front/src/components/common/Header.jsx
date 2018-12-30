import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../CSS/common/header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem("user")
        ? JSON.parse(localStorage.getItem("user"))
        : null,
      isLoading: false
    };
  }

  handleSignOut = () => {
    this.setState({ isLoading: true });
    const user = null;
    localStorage.removeItem("user");
    setTimeout(() => this.setState({ user, isLoading: false }), 1000);
    window.location = `/login`;
  };

  render() {
    const { user, isLoading } = this.state;
    return (
      <header className="header">
        <div className="header__inner--wrapper">
          <div className="header__inner">
            <nav className="nav">
              <ul className="nav__ul">
                <li >
                  <Link to={`/`} className="nav__ul__item__link">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to={`/shop`} className="nav__ul__item__link">
                    Shop
                  </Link>
                </li>
                <li>
                  <Link to={`/blog`} className="nav__ul__item__link">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to={`/contact`} className="nav__ul__item__link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="header__inner__logo">
              <img
                src={"../../images/logo.png"}
                alt="BRINE"
                className="header__inner__logo--img"
              />
            </div>
        
            <div className="header__inner__cart-login">
              {user && !user.isAdmin ? (
                <div className="header__inner__cart">
                  <Link to="/user/cart">
                    <FontAwesomeIcon icon="shopping-cart" />
                  </Link>
                </div>
              ) : null}
              <div className="header__inner__login-controls">
                {isLoading ? (
                  <FontAwesomeIcon icon="spinner" spin />
                ) : user ? (
                  user.isAdmin ? (
                    <>
                      <Link to={`/admin`}>
                        <FontAwesomeIcon icon="user" className="profile-icon" />
                      </Link>
                      <div className="sign-in-out-block">
                        <FontAwesomeIcon
                          icon="sign-out-alt"
                          className="sign-out-icon"
                          onClick={this.handleSignOut}
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="userProfile-icon__div">
                        <Link to={`/user/profile`}>
                          <FontAwesomeIcon
                            icon="user"
                            className="profile-icon"
                          />
                        </Link>
                      </div>

                      <div
                        onClick={this.handleSignOut}
                        className="sign-in-out-block"
                      >
                        <FontAwesomeIcon
                          icon="sign-out-alt"
                          className="sign-out-icon"
                        />
                      </div>
                    </>
                  )
                ) : (
                  <div>
                    <Link to={`/login`} className="sign-in-out-block">
                      <FontAwesomeIcon
                        icon="sign-in-alt"
                        className="sign-out-icon"
                      />
                      <span className="sign-in">Sign in</span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="dropdown-menu">
              <nav className="nav visible">
                <ul className="nav__ul">
                  <li className="nav__ul__item">
                    <Link to={`/`} className="nav__ul__item__link">
                      Home
                    </Link>
                  </li>
                  <li className="nav__ul__item">
                    <Link to={`/shop`} className="nav__ul__item__link">
                      Shop
                    </Link>
                  </li>
                  <li className="nav__ul__item">
                    <Link to={`/blog`} className="nav__ul__item__link">
                      Blog
                    </Link>
                  </li>
                  <li className="nav__ul__item">
                    <Link to={`/contact`} className="nav__ul__item__link">
                      Contact
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
        </div>
      </header>
    );
  }
}

export default Header;
