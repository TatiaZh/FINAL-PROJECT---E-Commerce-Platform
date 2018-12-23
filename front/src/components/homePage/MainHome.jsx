import React from 'react';
// import { Route, Link } from 'react-router-dom';

import Header from '../common/Header';
import Body from './MainBody';

const MainHome = props => {
  return (
    <div className="container">
      <Header />
      <Body />
    </div>
  );
};

export default MainHome;
