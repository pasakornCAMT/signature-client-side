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
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Dropdown link
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>

          </ul>
        </div>
      </nav>
    );
  }
}

export default Category;
