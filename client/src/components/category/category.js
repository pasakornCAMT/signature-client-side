import React, { Component } from 'react';
import './category.css';

class Category extends Component {
  render() {
    return (
      <nav id="categorybar" class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="c nav-link">Category 1</a>
            </li>
            <li class="nav-item">
              <a class="c nav-link">Category 2</a>
            </li>
            <li class="nav-item">
              <a class="c nav-link">Category 3</a>
            </li>
            <li class="nav-item">
              <a class="c nav-link">Category 4</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Category;
