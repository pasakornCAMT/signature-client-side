import React, { Component } from 'react';
import './App.css';
import {Route , Switch} from 'react-router-dom';
import ProductList from './components/product-list/product-list';
import EditProduct from './components/product-list/edit-product';
import Gashapon from './components/gashapon/gashapon';
import AddGashaProduct from './components/gashapon/add-gasha-product/add-gasha-product';


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
        <Route exact path='/' component={ProductList}/>
        <Route exact path='/edit' component={EditProduct}/>
        <Route exact path='/gasha' component={Gashapon}/>
        <Route exact path='/add-gasha' component={AddGashaProduct}/>
        </Switch>      
      </div>
    );
  }
}

export default App;
