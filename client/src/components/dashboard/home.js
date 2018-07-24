import React, { Component } from 'react';
import './home.css';
import FirstImg from './sss-web.png';
import ProductList from './product-list/product-list';
import Category from '../category/category';

class Home extends Component {
  render() {
    return (
      <div>
        <div class="gatsby-highlight">
          <img id="sss-web" src={FirstImg} alt="web img"/>
        </div>
        <div>
          {/* <Category/> */}
        </div>
        <div>
          <ProductList/>
        </div>
      </div>
    );
  }
}

export default Home;
