import React, { Component } from 'react';
import ProductItem from './product-item';
import FirebaseService from '../../../services/firebase'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] };
  }
  componentDidMount(){
    FirebaseService.child('products').on('value', snap =>{
      this.setState({products: snap.val()});
    })
  }
  render() {
    return (
      <div class="container">
        <div class="row">
        {
          this.state.products.map((product,key)=>
            <ProductItem key = {key} product = {product}/>
          )
        }
        </div>
      </div>
    );
  }
}

export default ProductList;
