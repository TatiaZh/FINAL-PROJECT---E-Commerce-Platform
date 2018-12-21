import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';
import Header from './components/header';
import Body from './components/mainBody';
import Home from './components/adminPanel/home/Home';
import './App.css';
import './fontAwesome';
import HeaderMy from './components/HomePage/HeaderMy';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="container">
            <Header />
            <Body />
            <Route path="/admin" render={props => <Home {...props} />} />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
