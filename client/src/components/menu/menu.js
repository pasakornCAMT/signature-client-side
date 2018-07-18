import React, { Component } from 'react';
import './menu.css';
import Logo from'./logo.png';

class Menu extends Component {
  constructor() {
    super();
    this.state = {

    }
  }
  render() {
    return (
      <nav id="menubar" class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <a class="navbar-left" href="/">
          <img id="sig-logo" src={Logo} alt="signature logo"/>
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse"
          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
          aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="m nav-link" href="/#">Product</a>
            </li>
            <li class="nav-item active">
              <a class="m nav-link" href="/#">Map</a>
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
