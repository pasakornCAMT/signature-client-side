import React, { Component } from 'react';
import './menu.css';

class Menu extends Component {
  render() {
    return (
      <nav id="menubar" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a id="sig-logo" class="navbar-brand logo" href="/">Signature</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="m nav-link" href="/#">Link 1</a>
            </li>
            <li class="nav-item active">
              <a class="m nav-link" href="/#">Link 2</a>
            </li>
            <li class="nav-item active">
              <a class="m nav-link" href="/#">Link 3</a>
            </li>
            <li class="nav-item active">
              <a class="m nav-link" href="/#">Link 4</a>
            </li>
            <li class="nav-item active">
              <a class="m nav-link" href="/#">Link 5</a>
            </li>
          </ul>
          <ul class="navbar-nav">
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
            </form>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
