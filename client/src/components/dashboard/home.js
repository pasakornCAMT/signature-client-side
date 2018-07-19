import React, { Component } from 'react';
import './home.css';
import FirstImg from './sss-web.png';
import Category from '../category/category';

class Home extends Component {
  render() {
    return (
      <div class="gatsby-highlight">
        <img id="sss-web" src={FirstImg} alt="web img"/>
        <Category/>
        <img id="sss-web" src={FirstImg} alt="web img"/>
      </div>

    );
  }
}

export default Home;
