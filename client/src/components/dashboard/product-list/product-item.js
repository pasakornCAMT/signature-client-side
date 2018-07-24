import React, { Component } from 'react';
import './product-item.css'
class ProductItem extends Component {
  render() {
    const {product} = this.props
    return (


<div class="col-sm-4">
      <div class="card" style={{width: '18rem', alignItems: 'center', margin: 10}}>
        <img id="product-item" src={product.image} width="250" height="250"/>
        <div class="card-body">
          <div><b>{product.name}</b></div>
          <div>{product.description}</div>
          <div><b>Price: {product.price} THB</b></div>
          </div>
      </div>
</div>
    );
  }
}

export default ProductItem;
