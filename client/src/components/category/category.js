import React, { Component } from 'react';
import './category.css';
import 'bootstrap/dist/css/bootstrap.css';

class Category extends Component {
  render() {
    return (
      <nav id="categorybar" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="c nav-link" id="allproduct">All Product</a>
            </li>
            <li class="nav-item">
              <a class="c nav-link" id="popular">Popular</a>
            </li>
            <li class="nav-item dropdown">
              <select class="selected">
                <option value="">category 1</option>
                <option value="">category 2</option>
                <option value="">category 3</option>
                <option value="">category 4</option>
              </select>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Category;
