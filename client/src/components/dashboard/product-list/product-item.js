import React, { Component } from 'react';
import './product-item.css'
class ProductItem extends Component {
  render() {
    const {product} = this.props
    return (
      <div class="col-sm-4">
      <img id="product-item" src={product.image} width="300" height="300"/>
      <div><b>{product.name}</b></div>
      <div>{product.description}</div>
      <div><b>Price: {product.price} THB</b></div>
      </div>
    );
  }
}

export default ProductItem;
