import React, { Component } from 'react';
import './gashapon.css'
import FirebaseService from '../../services/firebase';
import { Link } from 'react-router-dom'

class Gashapon extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gashaProductsIndex: [],
            result: 0,
            isRandom: false,
            chance: 0,
            gashaProducts: [],
            product: [],
        }
    }
    componentWillMount() {
        let i = 1
        let products = [];
        let index = [];
        FirebaseService.database().ref().child('products').orderByChild('inGasha').equalTo(true).on('child_added', (snap) => {
            products.push({
                id: i,
                image: snap.val().image,
                name: snap.val().name
            })
            index.push(i)
            this.setState({ gashaProducts: products, gashaProductsIndex: index })
            console.log('productGa: ', products)
            i++
        })
    }

    startGasha() {
        if (this.state.chance > 0) {
            this.setState({ isRandom: true })
            setInterval(() => {
                if (this.state.isRandom == true) {
                    var item = this.state.gashaProductsIndex[Math.floor(Math.random() * this.state.gashaProductsIndex.length)];
                    this.setState({ result: item })
                } else {
                    clearInterval()
                }

            }, 10)
        }

    }
    stopGasha() {
        this.setState({ isRandom: false, chance: this.state.chance - 1 })
        this.state.gashaProducts.filter((item) => {
            if (item.id == this.state.result) {
                this.setState({ product: item })
            }
        })
    }
    handleChance(event) {
        this.setState({ chance: event.target.value })
    }

    render() {
        return (
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class="gasha-container">
                            <h1>{this.state.result}</h1>
                            {
                                !this.state.isRandom ? (
                                    <div>
                                        <h2>{this.state.product.name}</h2>
                                    </div>
                                ) : null
                            }
                            <div class="btn">
                                {
                                    !this.state.isRandom ? (<button class="btn btn-success" onClick={this.startGasha.bind(this)} disabled={this.state.chance < 1}>START</button>)
                                        : (<button class="btn btn-danger" onClick={this.stopGasha.bind(this)}>STOP</button>)
                                }
                            </div>
                            <div class="row">
                                <div class="col-sm-2">
                                    <input type="number" class="form-control" value={this.state.chance} onChange={this.handleChance.bind(this)} />Chance
                                </div>
                                {
                                    this.state.chance < 1 ? (
                                        <div class="alert alert-danger" role="alert">
                                            You have no Chance
                                    </div>
                                    ) : null
                                }
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6">
                        <div class="row">
                            {
                                this.state.gashaProducts.map((product, key) => (
                                    <div class="col-sm-4" id="item">
                                        <div class="card" style={{ width: '10rem', alignItems: 'center', margin: 10, backgroundColor: this.state.result == product.id ? '#7FFFD4' : 'white' }}>
                                            <img id="product-item" src={product.image} width="150" height="150" />
                                            <div class="card-body">
                                                <div><b>Number: {product.id}</b></div>
                                                <div><b>{product.name}</b></div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div class="offset-sm-6">
                            <Link to="/add-gasha">
                                <button class="btn btn-warning">Add</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Gashapon;
