import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../../CSS/ProductDetails.css';

class Productdetails extends Component {
  render() {
    const {
      title,
      desc,
      images,
      price,
      timesBought,
      nutritionFacts,
      stock
    } = this.props.item;
    const imagesArr = images.split(',');
    return (
      <>
        <section className="product--details">
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

          <div className="product--details--img">
            <img src={imagesArr[1]} alt="" />
          </div>
          <div className="product--details--detalinfo">
            <h3>Product Details:</h3>
            <ul>
              <li>timesBought: {timesBought} </li>
              {nutritionFacts && (
                <li>
                  nutritionFacts:{' '}
                  <ul>
                    <li>Cholesterol: {nutritionFacts.Cholesterol}</li>
                    <li>Sodium: {nutritionFacts.Sodium}</li>
                    <li>Potassium: {nutritionFacts.Potassium}</li>
                    <li>Protein: {nutritionFacts.Protein}</li>
                    <li>Calcium: {nutritionFacts.Calcium}</li>
                    <li>Iron: {nutritionFacts.Iron}</li>
                  </ul>{' '}
                </li>
              )}

              <li>stock: {stock} </li>
            </ul>
          </div>
        </section>
      </>
    );
    // })
  }
}

export default Productdetails;
