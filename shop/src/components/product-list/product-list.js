import React, { Component } from 'react';
import FirebaseService from '../../services/firebase';
import firebase from '../../services/firebase';
import ProductItem from './product-item';
import { Link } from 'react-router-dom'

class ProductList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: [],
            name: '',
            description: '',
            price: 0,
            category: '',
            image: null,
        }
        this.addProduct = this.addProduct.bind(this);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
        this.fileUploadHandler = this.fileUploadHandler.bind(this);
    }
    componentWillMount() {
        FirebaseService.child('products').on('value', (snap) => {
            this.setState({ products: snap.val(), })
        })
    }
    addProduct() {
        //var refKey = FirebaseService.child('products').push().key;
        const product = {
            //id: refKey,
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category: this.state.category,
            inGasha: false,
        }
        var data = FirebaseService.child('products').push(product);
        var key = data.getKey();
        FirebaseService.child('products').child(key).update({
            id: key
        })
        this.setState({
            name: '',
            description: '',
            price: 0,
            category: ''
        })
    }
    onChangeName(text) {
        this.setState({ name: text.target.value })
    }
    onChangeDescription(text) {
        this.setState({ description: text.target.value })
    }
    onChangePrice(num) {
        this.setState({ price: num.target.value })
    }
    onChangeCategory(text) {
        this.setState({ category: text.target.value })
    }
    fileSelectedHandler(event) {
        this.setState({ image: event.target.files[0] })
    }
    fileUploadHandler() {
        var filename = this.state.image.name
        var storageRef = firebase.storage().ref('/images/' + filename)
        var uploadTask = storageRef.put(this.state.image)
        uploadTask.on('state_changed', function (snapshot) {
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
                case firebase.storage.TaskState.PAUSED: // or 'paused'
                    console.log('Upload is paused');
                    break;
                case firebase.storage.TaskState.RUNNING: // or 'running'
                    console.log('Upload is running');
                    break;
                default:
                    break;    
            }
        }, function (error) {
            // Handle unsuccessful uploads
        }, function () {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
                console.log('File available at', downloadURL);
            }); 
        });
    }
    render() {
        console.log('products: ', this.state.products)
        return (
            <div>
                <div class="row">
                    {
                        Object.values(this.state.products).map((product, key) => (
                            <ProductItem key={key} product={product} />
                        ))
                    }
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <h2>Add Product</h2>
                        <form>
                            <div class="form-group">
                                <input class="form-control" value={this.state.name} id="product-name" placeholder="Product Name" onChange={this.onChangeName} />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" value={this.state.description} id="product-des" rows="3" placeholder="Product Description" onChange={this.onChangeDescription}></textarea>
                            </div>
                            <div class="form row">
                                <div class="form-group col-sm-4">
                                    <input type="number" value={this.state.price} class="form-control" id="product-price" placeholder="Price" onChange={this.onChangePrice} />
                                </div>
                                <div class="form-group col-sm-8">
                                    <select id="product-category" value={this.state.category} class="form-control" onChange={this.onChangeCategory}>
                                        <option selected value="">Category...</option>
                                        <option value="food">Food</option>
                                        <option value="drink">Drink</option>
                                        <option value="snack">Snack</option>
                                        <option value="clothes">Clothes</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form row">
                                <div class="form-group col-sm-7">
                                    <input type="file" class="form-control-file" id="product-image" onChange={this.fileSelectedHandler} />
                                </div>
                                <div class="form-group col-sm-5">
                                    <button class="btn btn-default" onClick={this.fileUploadHandler}>Upload</button>
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={this.addProduct}>Submit</button>
                        </form>
                    </div>
                    <div class="col-sm-8">
                        <Link to="/gasha">
                            <button class="btn btn-primary">GASHAPON</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;
