import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../../CSS/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: localStorage.getItem('user')
        ? JSON.parse(localStorage.getItem('user'))
        : null,
      isLoading: false
    };
  }

  handleSignOut = () => {
    this.setState({ isLoading: true });
    const user = null;
    localStorage.removeItem('user');
    setTimeout(() => this.setState({ user, isLoading: false }), 1000);
    window.location = `/login`;
  };

  render() {
    const { user, isLoading } = this.state;
    return (
      <header>
        <div className="header__inner--wrapper">
          <div className="header__inner">
            <nav>
              <ul>
                <li>
                  <Link to={`/`}>Home</Link>
                </li>
                <li>
                  <Link to={`/shop`}>Shop</Link>
                </li>
                <li>
                  <Link to={`/blog`}>Blog</Link>
                </li>
                <li>
                  <Link to={`/contact`}>Contact</Link>
                </li>
              </ul>
            </nav>
            <div className="header__inner__logo">
              <img src={'../../images/logo.png'} alt="BRINE" />
            </div>
            <div className="header__inner__cart-login">
              <div className="header__inner__cart">
                <i className="fa fa-shopping-cart" />
                <span className="item-count__div">0</span>
              </div>
              <div className="header__inner__login-controls">
                {isLoading ? (
                  <FontAwesomeIcon icon="spinner" spin />
                ) : user ? (
                  user.isAdmin ? (
                    <>
                      <Link to={`admin`}>
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
                      <div>
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
                    <Link to={`/login`}>
                      <div className="sign-in-out-block">
                        <FontAwesomeIcon
                          icon="sign-in-alt"
                          className="sign-out-icon"
                        />
                        <span className="sign-in">Sign in</span>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
