import React, { Component } from 'react'


export class Form extends Component {
  productAdd = {}

  constructor(props) {
    super(props)
    this.state = {
      name: "",
      description: "",
      price: 0,
      nameDirty: false,
      priceDirty: false,
      descriptionDirty: false,
      nameError: "Поле наименование не может быть пустым",
      descriptionError: "Поле описание не может быть пустым",  
      priceError: "Поле цена не может быть пустым",     
    }
    this.blueHandler = this.blueHandler.bind(this)
    this.nameHandler = this.nameHandler.bind(this)
    this.descriptionHandler = this.descriptionHandler.bind(this)
    this.priceHandler = this.priceHandler.bind(this)

    
  }

  render() {
  return (
          <div>
            <form ref={(el) => this.myForm = el}>
              
              {(this.state.nameDirty && this.state.nameError) && <div style={{color: 'red'}}> {this.state.nameError} </div>}
              <input value={this.state.names} onBlur={(event) => this.blueHandler(event)} placeholder='Name'  name='name' onChange={(event) => this.nameHandler(event)} />
              
              {(this.state.descriptionDirty && this.state.descriptionError) && <div style={{color: 'red'}}> {this.state.descriptionError} </div>}
              <textarea value={this.state.descriptions} onBlur={(event) => this.blueHandler(event)}  placeholder='Description' name = 'description' onChange={(event) => this.descriptionHandler(event)}></textarea>
              
              {(this.state.priceDirty && this.state.priceError) && <div style={{color: 'red'}}> {this.state.priceError} </div>}
              <input  value={this.state.prices} placeholder='Price' name='price' onBlur={(event) => this.blueHandler(event)} onChange={(event) => this.priceHandler(event)}/>
              
              <button disabled={(this.state.nameError.length > 0 || this.state.descriptionError.length > 0 || this.state.priceError.length > 0)}  type='button' onClick={() => {
                this.myForm.reset()
                this.productAdd = {
                name: this.state.name,
                description: this.state.description,
                price: parseInt(this.state.price),
          }
          if(this.props.product) 
            this.productAdd.id = this.props.product.id

          this.props.onAdd(this.productAdd)
          }}>Отправить</button>
        </form>       

        </div>
  )
}

blueHandler(event) {
    switch (event.target.name){
      case 'name': 
        this.setState({nameDirty: true})
        break
      case 'description': 
        this.setState({descriptionDirty: true})
        break
      case 'price': 
        this.setState({priceDirty: true})

      break
  }
  } 

  nameHandler (event) {
    this.setState({name: event.target.value})

    if(this.state.name.length < 1) {
      this.setState({nameError: "Поле наименование не может быть пустым"})
    } else {
      this.setState({nameError: ""})
    }
  }

  descriptionHandler (event) {

    this.setState({description: event.target.value})

    if(this.state.description.length < 1) {
      this.setState({descriptionError: "Поле описание не может быть пустым"})
    } else {
      this.setState({descriptionError: ""})
    }

  }

  priceHandler (event) {
    this.setState({price: event.target.value})
    if (this.state.price.length < 1){ 
      this.setState({priceError: "Поле цена не может быть пустым"})
    } else if (Math.sign(parseInt(event.target.value)) !== 1) {
      this.setState({priceError: "Только пложительные числа"})
    } else {
      this.setState({priceError: ""})
    }
  }

}
export default Form;