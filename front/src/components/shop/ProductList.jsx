import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import '../../CSS/shop/products.css';

export default class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
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

  render() {
    let { items } = this.state;

    return (
      <>
        <main>
          <div className="main--container">
            {items.map(item => {
              return (
                <div key={item.id}>
                  <Link to={`/products/${item.id}`}>
                    <Product
                      key={item.id}
                      item={item}
                      editable={this.props.editable}
                      URLtoEdit={this.props.URLtoEdit}
                    />
                  </Link>
                </div>
              );
            })}
          </div>
        </main>
      </>
    );
  }
}
