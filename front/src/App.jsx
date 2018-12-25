import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import ProtectedUserRoute from './components/routes/ProtectedUserRoute';
import ProtectedAdminRoute from './components/routes/ProtectedAdminRoute';

import AdminHome from './components/adminPanel/home/AdminHome';
import MainHome from './components/homePage/MainHome';
import ShopMain from './components/shop/ShopMain';
import Login from './components/common/Login';
import UserProfile from './components/user/UserProfile';
import Contact from './components/contact/Contact';
import ShowArticle from './components/blog/Show';
import Blog from './components/blog/Blog';

import './App.css';
import './fontAwesome';

const API = `http://localhost:5000/api/`;

class App extends Component {
  constructor(props) {
    super(props);
    if (localStorage.getItem('user')) {
      this.state = {
        user: JSON.parse(localStorage.getItem('user'))
      };
    } else {
      this.state = {
        user: null
      };
    }
  }
  render() {
    const user = this.state.user;
    const url = user ? `${API}users/${user.id}` : `${API}users/guest`;
    return (
      <Router>
        <>
          <div className="App">
            <Route path="/" exact render={props => <MainHome {...props} />} />
            <ProtectedAdminRoute path="/admin" component={AdminHome} />
            <Route path="/shop" render={props => <ShopMain {...props} />} />

            <Route path="/contact" render={props => <Contact {...props} />} />
            <Route
              path="/article"
              render={props => <ShowArticle {...props} />}
            />
            <Route path="/blog" render={props => <Blog {...props} />} />
            <Route
              path="/login"
              render={props => <Login {...props} url={`${API}users/login`} />}
            />

            <ProtectedUserRoute
              path="/user"
              component={UserProfile}
              url={url}
            />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
