import React, { Component } from 'react'

export class Header extends Component {
  render() {
  return (
    <header className='header'>
        <h2> {this.props.title} </h2>
    </header>
  )
}

}
export default Header;