import React, { Component } from 'react';
import ProductItem from './product-item';
import FirebaseService from '../../../services/firebase'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      keyword: '',
      productsAll: [],
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentWillMount(){
    FirebaseService.child('products').on('value', snap =>{
      this.setState({products: snap.val(),productsAll: snap.val()});
    })
  }
  handleChange(word){
    this.setState({keyword: word.target.value},()=>{
      console.log('keyword: ',this.state.keyword);
      let filter = this.state.productsAll.filter(product => product.name.includes(this.state.keyword));
      this.setState({products: filter})
    })
  }

  render() {
    let numOfCol = 0;
    return (
      <div class="container">
        <br/>
        <div class="row pt-2 pb-5">
          <div class="col-12 d-flex justify-content-left">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.keyword} onChange={this.handleChange}/>
            <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
          </div>
        </div>
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
