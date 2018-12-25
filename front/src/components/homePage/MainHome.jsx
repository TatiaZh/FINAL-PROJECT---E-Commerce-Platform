import React from 'react';
// import { Route, Link } from 'react-router-dom';

import Header from '../common/Header';
import Body from './MainBody';
import Footer from '../common/Footer';

const MainHome = props => {
  return (
    <div className="container">
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

export default MainHome;
