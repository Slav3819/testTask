import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import List from './components/List';
import Form from './components/Form';
import axios from 'axios';
import $ from 'jquery';

const baseUrl = "http://localhost:8000"
 
export class App extends Component {
  constructor(props) {
    super(props)
    axios.get(baseUrl)
    .then((res) =>  {
      this.setState({products: res.data})
    })
    .catch(err => {
      console.log(err);
    })

    this.state = {
      products: []
    }

    this.addProduct = this.addProduct.bind(this)
    this.deleteProduct = this.deleteProduct.bind(this)
    this.editProduct = this.editProduct.bind(this)
  }

  render() {
    return (
        < div >
          <Header title="Список" />
          <main>
            <List products = {this.state.products} onDelete = {this.deleteProduct} onEdit = {this.editProduct}/>
          </main>

          <aside>
            <Form onAdd = {this.addProduct} />
          </aside>
          
        </div>
    )
  }

  deleteProduct(id) {
    this.setState({
      products: this.state.products.filter((el) => el.id !== id)
    })
  }

  editProduct(product) {
    let allProducts = this.state.products
    allProducts[product.id - 1] = product
    this.setState({products: []}, () => {
      this.setState({products: [...allProducts]})
    })    
    } 
    
  addProduct (product) {
    const id = this.state.products.length + 1

    $.ajax({
      type: "POST",
      url: baseUrl,
      data: {                
          "id": id,
          "name": product.name,
          "description": product.description,
          "price": product.price
      },
      success: function(response) {
           console.log(response);
      },
      error: function(response) {
          console.log(response);
  }
  });

  axios.get(baseUrl)
  .then((res) =>  {
    this.setState({products: res.data})
  })
  .catch(err => {
    console.log(err);
  })

  }
}
export default App;
