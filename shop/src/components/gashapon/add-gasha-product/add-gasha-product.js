import React, { Component } from 'react';
import FirebaseService from '../../../services/firebase';
import forward from './forward.png'

class AddGashaProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      outGashaProducts: [],
      inGashaProducts: [],
    };
  }
  componentWillMount() {
    FirebaseService.database().ref().child('products').orderByChild('inGasha').equalTo(false).on('value', (snap) => {
      this.setState({ outGashaProducts: snap.val() })
    })
    FirebaseService.database().ref().child('products').orderByChild('inGasha').equalTo(true).on('value', (snap) => {
      this.setState({ inGashaProducts: snap.val() })
    })
  }

  handleMoveIn(id) {
    console.log('id: ', id.target.value)
    FirebaseService.database().ref().child('products').child(id.target.value).update({
      inGasha: true
    })
  }

  handleMoveOut(id) {
    console.log('id: ', id.target.value)
    FirebaseService.database().ref().child('products').child(id.target.value).update({
      inGasha: false
    })
  }

  render() {
    return (
      <div class="container">
        <div class="row">
          <div class="col-sm-5">
            <h4>Out Gashapon</h4>
            <div class="row">
              {
                this.state.outGashaProducts ? (
                  Object.values(this.state.outGashaProducts).map((product, key) => (
                    <div class="col-sm-4" id="item">
                      <div class="card" style={{ width: '8rem', alignItems: 'center', margin: 10 }}>
                        <img id="product-item" src={product.image} width="125" height="125" />
                        <div class="card-body">
                          <div><b>ID: {product.id}</b></div>
                          <div><b>{product.name}</b></div>
                        </div>
                        <div style={{ marginBottom: 5 }}>
                          <button class="btn btn-success" value={product.id} onClick={this.handleMoveIn.bind(this)}>Move in</button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : null
              }
            </div>
          </div>
          <div class="col-sm-2" style={{ paddingTop: 200 }}>
            <img src={forward} height="100" width="100" />
          </div>
          <div class="col-sm-5">
            <h4>In Gashapon</h4>
            <div class="row">
              {
                this.state.inGashaProducts ? (
                  Object.values(this.state.inGashaProducts).map((product, key) => (
                    <div class="col-sm-4" id="item">
                      <div class="card" style={{ width: '8rem', alignItems: 'center', margin: 10 }}>
                        <img id="product-item" src={product.image} width="125" height="125" />
                        <div class="card-body">
                          <div><b>ID: {product.id}</b></div>
                          <div><b>{product.name}</b></div>
                        </div>
                        <div style={{ marginBottom: 5 }}>
                          <button class="btn btn-danger" value={product.id} onClick={this.handleMoveOut.bind(this)}>Move out</button>
                        </div>
                      </div>
                    </div>
                  ))
                ) : null
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AddGashaProduct;
