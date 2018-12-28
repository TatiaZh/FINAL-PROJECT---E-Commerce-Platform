import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../CSS/ProductDetails.css';

class Productdetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: null
    };
  }
  componentDidMount() {
    fetch(`http://localhost:5000/api/products/${this.props.match.params.id}`)
      .then(res => res.json())
      .then(json => {
        // setTimeout(() => {
        this.setState({ item: json });
        // }, 3000)
      })
      .catch(err => console.log(err));
  }
  render() {
    if (!this.state.item) {
      return <p>Loading...</p>;
    }
    const {
      title,
      desc,
      images,
      price,
      timesBought,
      nutritionFacts,
      stock
    } = this.state.item;
    const imagesArr = images.split(',');
    const nutFacts = nutritionFacts.split(',');
    return (
      <>
        <main className="product--details">
          <div className="product--details--section">
            <div className="product--details--img--main">
              <img src={imagesArr[0]} alt="" />
            </div>
            <div className="product--details--text">
              <h1 className="product--details--text--title">{title}</h1>
              <h5 className="product--details--text--price">${price}</h5>
              <p className="product--details--description">{desc}</p>
              <span className="product--details--span">QUANTITY:</span>
              <form>
                <input
                  type="number"
                  min="1"
                  placeholder="1"
                  ref="quantity"
                  className="product--details--input"
                />
              </form>
              {this.props.editable ? (
                <Link
                  className="edit--button"
                  to={`/admin/products/${this.props.item.id}/edit`}
                >
                  EDIT
                </Link>
              ) : (
                <button className="addToCart--button">ADD TO CART</button>
              )}

              <div className="product--details--text--icons">
                {/* <FontAwesomeIcon icon={['fab', 'facebook']} />
              <FontAwesomeIcon icon={['fab', 'twitter']} />
              <FontAwesomeIcon icon={['fab', 'instagram']} /> */}
              </div>
            </div>
          </div>
          <div className="product--details--section">
            <div className="product--details--img">
              <img src={imagesArr[1]} alt="" />
            </div>
            <div className="product--details--text">
              <h3>Product Details:</h3>
              <ul>
                {nutritionFacts && (
                  <li>
                    nutritionFacts:
                    <ul>
                      {nutFacts.map((fact, index) => (
                        <li key={index}>{fact}</li>
                      ))}
                    </ul>
                  </li>
                )}

                <li>stock: {stock} </li>
              </ul>
            </div>
          </div>
        </main>
      </>
    );
    // })
  }
}

export default Productdetails;
