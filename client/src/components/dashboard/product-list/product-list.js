import React, { Component } from 'react';
import ProductItem from './product-item';
import FirebaseService from '../../../services/firebase'
import { throws } from 'assert';
import ShopDetail from '../shop-detail/shop-detail';

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      keyword: '',
      productsAll: [],
      category: '',
      isSelectPopular: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSelect = this.handleSelect.bind(this);
    this.handlePopular = this.handlePopular.bind(this);
    this.handleAllProduct = this.handleAllProduct.bind(this);
  }
  componentWillMount() {
    FirebaseService.child('products').on('value', snap => {
      this.setState({ products: snap.val(), productsAll: snap.val() });
    })
  }
  handleChange(word) {
    this.setState({ keyword: word.target.value }, () => {
      console.log('keyword: ', this.state.keyword);
      let filter = this.state.productsAll.filter(product => product.name.includes(this.state.keyword));
      this.setState({ products: filter })
    })
  }

  handleSelect(event){
    this.setState({category: event.target.value},()=>{
      let filter = this.state.productsAll.filter(product => product.category.includes(this.state.category))
      this.setState({products: filter});
    })
  }

  handlePopular(event){
    this.setState({isSelectPopular: true}, ()=>{
      let filter = this.state.productsAll.filter(product => product.popular == true)
      this.setState({products: filter});
    })
  }

  handleAllProduct(event){
    this.setState({isSelectPopular: false},()=>{
      this.setState({products: this.state.productsAll})
    })
  }

  render() {
    let numOfCol = 0;
    return (
      <div class="container">
        <nav id="categorybar" class="navbar navbar-expand-lg navbar-light bg-light">
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item">
                <a class="c nav-link" id="allproduct" onClick={this.handleAllProduct}>All Product</a>
              </li>
              <li class="nav-item">
                <a class="c nav-link" id="popular" onClick={this.handlePopular}>Popular</a>
              </li>
              <li class="nav-item dropdown">
                <select class="selected" onChange={this.handleSelect}>
                  <option value="" >All</option>
                  <option value="food" >Food</option>
                  <option value="drink">Drink</option>
                  <option value="snack">Snack</option>
                  <option value="clothes">Clothes</option>
                </select>
              </li>
            </ul>
          </div>
        </nav>
        <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" value={this.state.keyword} onChange={this.handleChange} />
        <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
        <div class="row">
          {
            this.state.products.map((product, key) =>
              <ProductItem key={key} product={product} />
            )
          }
        </div>
        <div>
          <ShopDetail/>
        </div>
      </div>
    );
  }
}

export default ProductList;
