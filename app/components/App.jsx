import React, { Component } from 'react'
import Products from '../containers/products.jsx'
import ShoppingCart from '../containers/shoppingCart.jsx'
export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome to our shop</h1>
        <Products />
      </div>
    )
  }
}
