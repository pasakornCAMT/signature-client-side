'use strict';

import React, { Component } from 'react';
import ProductItem from './product-item';
import FirebaseService from '../../../services/firebase'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }; // <- set up react state
  }
  componentWillMount(){
    
  }
  render() {
    return (
      <div>
        Hello from Product list
      </div>
    );
  }
}

export default ProductList;
