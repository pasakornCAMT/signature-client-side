import React, { Component } from 'react';
import './category.css';

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
            <li class="nav-item">
              <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Category
  </a>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <a class="dropdown-item" href="#">Food</a>
    <a class="dropdown-item" href="#">Gift</a>
    <a class="dropdown-item" href="#">Something else here</a>
  </div>
</div>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Category;
