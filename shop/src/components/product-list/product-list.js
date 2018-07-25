import React, { Component } from 'react';
import FirebaseService from '../../services/firebase';
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
            category: 'food',
            image: null,
            editName: '',
            editDes: '',
            editPrice: 0,
            editCat: '',
            editId: '',
            isClickEdited: false,
        }
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangePrice = this.onChangePrice.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.fileSelectedHandler = this.fileSelectedHandler.bind(this);
    }
    componentWillMount() {
        FirebaseService.database().ref().child('products').on('value', (snap) => {
            this.setState({ products: snap.val(), })
        })
    }
    addProduct() {
        const product = {
            name: this.state.name,
            description: this.state.description,
            price: this.state.price,
            category: this.state.category,
            inGasha: false,
        }
        var data = FirebaseService.database().ref().child('products').push(product);
        var key = data.getKey();
        FirebaseService.database().ref().child('products').child(key).update({
            id: key
        })

        var filename = this.state.image.name
        var storageRef = FirebaseService.storage().ref(filename)
        var uploadTask = storageRef.put(this.state.image)
        console.log('imageeee: ',uploadTask)
        storageRef.getDownloadURL().then(url=>{
            FirebaseService.database().ref().child('products').child(key).update({
                image: url
            })
        })

        // uploadTask.on('state_changed', function (snapshot) {

        // }, function (error) {
        //     // Handle unsuccessful uploads
        // }, function () {
        //     // Handle successful uploads on complete
        //     // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        //     uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        //         console.log('File available at', downloadURL);
        //     }); 
        // });

        this.setState({
            name: '',
            description: '',
            price: 0,
            category: 'food',
            image: null,
        })
    }
    onSubmit(){
        //this.fileUploadHandler()
        this.addProduct()
        window.alert('Add Product Success')
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
    onEditName(text) {
        this.setState({ editName: text.target.value })
    }
    onEditDescription(text) {
        this.setState({ editDes: text.target.value })
    }
    onEditPrice(num) {
        this.setState({ editPrice: num.target.value })
    }
    onEditCategory(text) {
        this.setState({ editCat: text.target.value })
    }
    fileSelectedHandler(event) {
        this.setState({ image: event.target.files[0] })
    }
    fileUploadHandler() {
        var filename = this.state.image.name
        var storageRef = FirebaseService.storage().ref(filename)
        storageRef.put(this.state.image)
        FirebaseService.storage().ref().child(filename).getDownloadURL().then(url=>{
            this.setState({imageURI: url})
            console.log('dddddddddddddddddddddddd',url)
        })
    }
    preparedEditProduct(product){
        this.setState({
            editName: product.name,
            editDes: product.description,
            editPrice: product.price,
            editCat: product.category,
            editId: product.id,
            isClickEdited: true,
        })
        
    }
    onReset(){
        this.setState({
            editName: '',
            editDes: '',
            editPrice: 0,
            editCat: '',
            editId: '',
            isClickEdited: false,
        })
    }
    editProduct(){
        const product = {
            name: this.state.editName,
            description: this.state.editDes,
            price: this.state.editPrice,
            category: this.state.editCat,
        }
        if(window.confirm('Do you want to update this product?')){
            FirebaseService.database().ref().child('products').child(this.state.editId).update(product)

            this.setState({
                editName: '',
                editDes: '',
                editPrice: 0,
                editCat: '',
                editId: '',
                isClickEdited: false,
            })
            window.alert('Update product success')
        }
    }
    render() {
        console.log('products: ', this.state.products)
        return (
            <div>
                <div class="row">
                    {
                        Object.values(this.state.products).map((product, key) => (
                            <ProductItem key={key} product={product} onEdit={this.preparedEditProduct.bind(this)}/>
                        ))
                    }
                </div>
                <div class="row">
                    <div class="col-sm-4">
                        <h2>Add Product</h2>
                        <form>
                            <div class="form-group">
                                <input class="form-control" value={this.state.name} id="product-name" placeholder="Product Name" onChange={this.onChangeName}/>
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
                                        <option selected value="food">Food</option>
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
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={this.onSubmit.bind(this)}>Submit</button>
                        </form>
                    </div>
                    <div class="col-sm-4">
                        <Link to="/gasha">
                            <button class="btn btn-primary">GASHAPON</button>
                        </Link>
                    </div>
                    <div class="col-sm-4">
                        <h2>Edit Product</h2>
                        <form>
                            <div class="form-group">
                                <input class="form-control" value={this.state.editName} id="edit-product-name" placeholder="Product Name" onChange={this.onEditName.bind(this)}/>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" value={this.state.editDes} id="edit-product-des" rows="3" placeholder="Product Description" onChange={this.onEditDescription.bind(this)}></textarea>
                            </div>
                            <div class="form row">
                                <div class="form-group col-sm-4">
                                    <input type="number" value={this.state.editPrice} class="form-control" id="edit-product-price" placeholder="Price" onChange={this.onEditPrice.bind(this)}/>
                                </div>
                                <div class="form-group col-sm-8">
                                    <select id="edit-product-category" value={this.state.editCat} class="form-control" onChange={this.onEditCategory.bind(this)}>
                                        <option value="">Category...</option>
                                        <option selected value="food">Food</option>
                                        <option value="drink">Drink</option>
                                        <option value="snack">Snack</option>
                                        <option value="clothes">Clothes</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form row">
                                <div class="form-group col-sm-7">
                                    <input type="file" class="form-control-file" id="edit-product-image" />
                                </div>
                            </div>
                            <button type="submit" class="btn btn-primary" onClick={this.editProduct.bind(this)} disabled={!this.state.isClickEdited}>Edit</button>
                            <button type="submit" class="btn btn-default" style={{marginLeft: 10,}} onClick={this.onReset.bind(this)}>Reset</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductList;
