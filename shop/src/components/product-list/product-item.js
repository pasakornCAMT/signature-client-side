import React, { Component } from 'react';
import './product-item.css'
import FirebaseService from '../../services/firebase';
import { Link } from 'react-router-dom'
class ProductItem extends Component {
    onRemove() {
        const { product } = this.props
        FirebaseService.child('products').child(product.id).remove()
    }
    render() {
        const { product } = this.props
        return (
            <div class="col-sm-4">
                <div class="card" style={{ width: '18rem', alignItems: 'center', margin: 10 }}>
                    <img id="product-item" src={product.image} width="250" height="250" />
                    <div class="card-body">
                        <div><b>{product.name}</b></div>
                        <div>{product.description}</div>
                        <div><b>Price: {product.price} THB</b></div>
                        <div>
                            <div class="row">
                                <div class="col-sm-6">
                                    <Link to="/edit" product={product}>
                                        <button type="button" class="btn">Edit</button>
                                    </Link>
                                </div>
                                <div class="col-sm-6">
                                    <button type="button" class="btn btn-danger" onClick={this.onRemove.bind(this)}>Remove</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductItem;
