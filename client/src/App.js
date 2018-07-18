import React, { Component } from 'react';
import {Route , Switch} from 'react-router-dom';
import './App.css';
import Menu from './components/menu/menu';
import Category from './components/category/category'
import Home from './components/dashboard/home'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu/>
        <Category/>
        <Switch>
          <Route exact path='/' component={Home}/>
        </Switch>
      </div>
    );
  }
}

export default App;
