import React from 'react'
import { connect } from 'react-redux'
import Products from '../components/products.jsx'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes'

function mapStateToProps(state) {
    return {
        products: state.products
    }

}
function mapDispatchToProps(dispatch) {
    return (
     function handleClick(id) {
        dispatch({
            type: ADD_TO_CART,
            payload: {
                id
            }
        })
    }
    )
}

let ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products)
export default ProductsContainer
