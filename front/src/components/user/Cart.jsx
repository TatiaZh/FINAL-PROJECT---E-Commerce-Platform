import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import CartItem from './CartItem';
import '../../CSS/user/cart.css';

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartList: [],
      cartProducts: []
    };
  }
  componentDidMount() {
    if (localStorage.user && !localStorage.user.isAdmin) {
      const id = JSON.parse(localStorage.getItem('user')).id;

      fetch(`http://localhost:5000/api/users/${id}/cart`)
        .then(res => res.json())
        .then(json => {
          // setTimeout(() => {
          this.setState({ cartList: json });
          // }, 3000)
        })
        .catch(err => console.log(err))
        .then(res => {
          const idArray = {
            idArray: this.state.cartList.map(cartList => cartList.id)
          };

          fetch(`http://localhost:5000/api/products/multiple`, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(idArray)
          })
            .then(res => res.json())
            .then(json => {
              this.setState({ cartProducts: json });
            })
            .catch(err => console.log(err));
        });
    }
  }
  subTotal = () => {
    let sumcartitems = 0;
    this.state.cartProducts.forEach(cartItem => {
      const quantity = this.state.cartList.find(item => item.id == cartItem.id)
        .quantity;
      sumcartitems += parseFloat(cartItem.price) * parseFloat(quantity);
    });
    this.state.subTotal = sumcartitems;
    // this.setState({ subTotal: sumcartitems });
  };
  removeItem = id => {
    const { cartList, cartProducts } = this.state;
    const sortedCartList = cartList.filter(item => item.id !== id);
    const sortedCartProducts = cartProducts.filter(item => item.id !== id);

    if (localStorage.user && !localStorage.user.isAdmin) {
      const userid = JSON.parse(localStorage.getItem('user')).id;

      fetch(`http://localhost:5000/api/users/${userid}/cart/${id}`, {
        method: 'delete'
      })
        .then(res => res.json())
        .then(json => {
          console.log(json);
        })
        .catch(err => console.log(err));
    }

    this.setState({
      cartList: sortedCartList,
      cartProducts: sortedCartProducts
    });
  };
  render() {
    const { cartList, cartProducts } = this.state;
    if (!cartList || !cartProducts) {
      return <p>Loading...</p>;
    }

    return (
      <div className="cart-container">
        <div className="cartIcon">
          {cartProducts.map(cartitem => {
            return (
              <div key={cartitem.id}>
                <CartItem
                  key={cartitem.id}
                  cartitem={cartitem}
                  quantity={
                    cartList.find(item => item.id == cartitem.id).quantity
                  }
                  removeItem={this.removeItem}
                  //   value={this.state.value}
                  //   checkout={this.checkout}
                />
              </div>
            );
          })}
        </div>
        {this.subTotal()}

        <div className="subtotal">subtotal: $ {this.state.subTotal}</div>
        <Link to={`/user/cart/checkout`}>
          <button className="button--checkout">Checkout</button>
        </Link>
      </div>
    );
  }
}

export default Cart;
