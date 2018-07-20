import React, { Component } from 'react';
import './product-item.css'

class ProductItem extends Component {

  render() {
    const {product} = this.props
    return (
      <div class="col-sm-4">
        <div class="card" style={{width: '18rem'}}>
          <div class="crop">
            <img id="product-item" class="img-item" src={product.image}/>
          </div>
          <div class="card-body">
            <div><b>{product.name}</b></div>
            <div class="desc">{product.description}</div>
            <a class="price"><div><b>Price: {product.price} THB</b></div></a>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
