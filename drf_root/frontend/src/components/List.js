import React, { Component } from 'react'
import Product from './Product'

export class List extends Component {

  render () {
    if (this.props.products.length > 0)
        return (
          <div>
            {this.props.products.map((el) => (
              <Product onDelete = {this.props.onDelete} onEdit = {this.props.onEdit}  key = {el.id} product = {el} />
            ))}
          </div>)
    else 
      return (
        <div className='product'>
          <h3>Продуктов нет!!!</h3>  
        </div>)
  }

}

export default List;
