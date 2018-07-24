import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import ProductList from './components/product-list/product-list';
import EditProduct from './components/product-list/edit-product';
import Gashapon from './components/gashapon/gashapon';

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' component={ProductList}/>
        <Route exact path='/edit' component={EditProduct}/>
        <Route exact path='/gasha' component={Gashapon}/>
        </Switch>      
      </div>
    );
  }
}

export default App;
