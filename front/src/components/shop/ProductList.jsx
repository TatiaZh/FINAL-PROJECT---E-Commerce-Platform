import React, { Component } from 'react';
import Product from './Product';
import ProdDet from './ProdDet';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      itemClicked: false
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
  onProductClick = id => {
    const { items } = this.state;
    const oneItem = items.filter(item => item.id === id);
    this.setState({
      items: oneItem,
      itemClicked: true
    });
  };

  render() {
    let { items, itemClicked } = this.state;
    console.log(this.props.editable);
    return (
      <>
        {/* <Header /> */}
        <main>
          <div className="main--container">
            {items.map(item => {
              return (
                <div>
                  {itemClicked ? (
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
                    />
                  )}
                </div>
              );
            })}
          </div>
        </main>
      </>
    );
  }
}
