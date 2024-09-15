import React, { Component } from 'react'
import { BsTrash3Fill,  BsPencilFill } from "react-icons/bs";
import Form from './Form';

export class Product extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editForm: false,
    }

  }

    product = this.props.product
  render() {
  return (
    <div className='product'  > 
        <BsTrash3Fill onClick={() => this.props.onDelete(this.product.id)} className='delete-icon'/>
        <BsPencilFill  onClick={() => {
            this.setState({
              editForm: !this.state.editForm
            })
        }} className='edit-icon'/>
        <h3>{this.product.name}</h3>
        <p>{this.product.description}</p>
        <p>Цена {this.product.price}</p>

        {this.state.editForm && <Form product = {this.product} onAdd = {this.props.onEdit}/>}
    </div>

  )
}

}
export default Product;