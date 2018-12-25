import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Product extends Component {
  render() {
    const { id, title, images, price } = this.props.item;
    const { onProductClick, editable } = this.props;
    const imagesArr = images.split(',');
    if (!imagesArr) {
      return <p>Loading...</p>;
    }
    console.log(`../${imagesArr[0]}`);
    return (
      <>
        <div
          onClick={() => {
            onProductClick(id);
          }}
          className="main--container--product"
          id="main--container--product"
        >
          <img
            className="main--container--product--image "
            id="first--img"
            src={`../${imagesArr[0]}`}
            alt="sdv"
          />
          <img
            className="main--container--product--image display--none"
            id="hover--img"
            src={`../${imagesArr[1]}`}
            alt="sdv"
          />

          <div className="main--container--product--information">
            <h3 className="main--container--product--name">{title}</h3>
            <p className="main--container--product--price">
              ${parseInt(price)}
            </p>
          </div>
          {editable && (
            <div className="edit-product">
              <FontAwesomeIcon icon="edit" />
            </div>
          )}
        </div>
      </>
    );
  }
}
