import React, { Component } from 'react';
import './product-item.css'
class ProductItem extends Component {
  render() {
    const {product} = this.props
    return (
      <div class="col-sm-4">
      <img id="product-item" src={product.image} width="100" height="100"/>
      <div><b>{product.name}</b></div>
      <div>{product.description}</div>
      <div>Price: {product.price} THB</div>
      </div>
    );
  }
}

export default ProductItem;
