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
          </ul>
        </div>
      </nav>
    );
  }
}

export default Menu;
