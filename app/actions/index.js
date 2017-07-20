import { ADD_TO_CART, REMOVE_FROM_CART } from '../constants/actionTypes'
let addToCart = (id) => {
    return {type: ADD_TO_CART, payload: id}
}
export default addToCart
