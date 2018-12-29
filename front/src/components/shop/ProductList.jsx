import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import Product from './Product';
import ProdDet from './ProdDet';
import Footer from '../common/Footer';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemClicked: false,
      itemId: null
    };
  }
  componentDidMount() {
    fetch('http://localhost:5000/api/products')
      .then(res => res.json())
      .then(json => {
        // setTimeout(() => {
        this.setState({ items: json });
        // }, 3000)
      })
      .catch(err => console.log(err));
  }

  removeTour = id => {
    const { items } = this.state;
    const sortedProduct = items.filter(item => item.id !== id);
    this.setState({
      items: sortedProduct
    });
  };
  // onProductClick = id => {
  //   // const { items } = this.state;
  //   // const oneItem = items.filter(item => item.id === id);
  //   // this.setState({
  //   //   items: oneItem,
  //   //   itemClicked: true
  //   // });
  //   this.setState({ itemId: id });
  // };

  render() {
    let { items, itemClicked } = this.state;

    return (
      <>
        <main>
          <div className="main--container">
            {items.map(item => {
              return (
                <div>
                  {/* {itemClicked ? (
                    <ProdDet
                      key={item.id}
                      item={item}
                      editable={this.props.editable}
                    />
                  ) : (
                    <Product
                      key={item.id}
                      item={item}
                      onProductClick={this.onProductClick}
                      editable={this.props.editable}
                      URLtoEdit={this.props.URLtoEdit}
                    />
                  )} */}

                  <Link to={`/products/${item.id}`}>
                    <Product
                      key={item.id}
                      item={item}
                      editable={this.props.editable}
                      URLtoEdit={this.props.URLtoEdit}
                      // onProductClick={this.onProductClick}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </main>

        <Footer />
      </>
    );
  }
}