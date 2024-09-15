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
      nameError: "Поле название не может быть пустым",
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
              <input value={this.state.name} onBlur={e => this.blueHandler(e)} placeholder='Name'  name = 'name' onChange={(event) => this.nameHandler(event)} />
              
              {(this.state.descriptionDirty && this.state.descriptionError) && <div style={{color: 'red'}}> {this.state.descriptionError} </div>}
              <textarea value={this.state.descriptions} onBlur={(event) => this.blueHandler(event)}  placeholder='Description' name = 'description' onChange={(event) => this.descriptionHandler(event)}></textarea>
              
              {(this.state.priceDirty && this.state.priceError) && <div style={{color: 'red'}}> {this.state.priceError} </div>}
              <input  placeholder='Price' name='price' onBlur={(event) => this.blueHandler(event)} onChange={(event) => this.priceHandler(event)}/>
              
              <button type='button' onClick={() => {
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
        if(this.state.name.length === 0)
          this.setState({nameDirty: true})
        break
      case 'description': 
        if(this.state.description.length === 0)
          this.setState({descriptionDirty: true})
        break
      case 'price': 
        if(this.state.price.length === 0) {
          this.setState({priceDirty: true})
        } else if (Math.sign(parseInt(event.target.value) !== 1)) {
          this.setState({priceDirty: true})
        }

      break
  }
  } 

  nameHandler (event) {
    this.setState({name: event.target.value})

    if(this.state.description.length > 0) {
      this.setState({nameDirty: false})
    } else {
      this.setState({nameDirty: true})
    }
  }

  descriptionHandler (event) {

    this.setState({description: event.target.value})

    if(this.state.description.length > 0) {
      this.setState({descriptionDirty: false})
    } else {
      this.setState({descriptionDirty: true})
    }

  }

  priceHandler (event) {
    this.setState({price: event.target.value})

    if (this.state.price.length < 0){ 
      this.setState({priceError: "Поле цена не может быть пустым"})
      this.setState({priceDirty: true})
    } else if (Math.sign(parseInt(event.target.value)) !== 1) {
      this.setState({priceError: "Только пложительные числа"})
      this.setState({priceDirty: true})
    } else {
      this.setState({priceError: ""})
    }

    console.log(Math.sign(parseInt(event.target.value)))
  }

}
export default Form;