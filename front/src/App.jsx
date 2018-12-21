import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route } from 'react-router-dom';

import AdminHome from './components/adminPanel/home/AdminHome';
import './App.css';
import './fontAwesome';
import MainHome from './components/homePage/MainHome';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <div className="App">
            <Route path="/" exact render={props => <MainHome {...props} />} />
            <Route path="/admin" render={props => <AdminHome {...props} />} />
          </div>
        </>
      </Router>
    );
  }
}

export default App;
