import React from 'react'
import { connect } from 'react-redux'
import ShoppingCart from '../components/shoppingCart.jsx'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes'


function getProductsInCart(products, shoppingCart) {
    return products.filter(product => shoppingCart.includes(product.id))
}

function mapStateToProps(state) {
    return {
        products: getProductsInCart(state.products, state.shoppingCart)
    }

}
function mapDispatchToProps(dispatch) {
    return (
     function handleClick(id) {
        dispatch({
            type: REMOVE_FROM_CART,
            payload: {
                id
            }
        })
    }
    )
}

let ShoppingCartContainer = connect(mapStateToProps, mapDispatchToProps)(ShoppingCart)
export default ShoppingCartContainer
