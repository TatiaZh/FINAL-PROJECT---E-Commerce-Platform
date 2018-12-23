import React from 'react';
import ProductList from './ProductList';
import Header from '../common/Header';

const ShopMain = props => {
  return (
    <>
      <Header />
      <ProductList {...props} />
    </>
  );
};

export default ShopMain;
