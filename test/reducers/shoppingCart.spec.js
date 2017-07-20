import shoppingCart from '../../app/reducers/shoppingCart'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../app/constants/actionTypes'

describe('shopping cart reducer', () => {
    test('ADD_TO_CART sets state', () => {
        expect(JSON.stringify(shoppingCart([], { type: ADD_TO_CART, payload: { id: 22 } })))
            .toBe(JSON.stringify([22]))
    })


    test('validate that test works', () => {
        expect(JSON.stringify(shoppingCart([], { type: ADD_TO_CART, payload: { id: 22 } })))
            .not.toBe(JSON.stringify([23]))
    })


    test('REMOVE_FROM_CART works', () => {
        var state = []
        state = shoppingCart(state, { type: ADD_TO_CART, payload: { id: 22 } })
        expect(JSON.stringify(shoppingCart(state, { type: REMOVE_FROM_CART, payload: { id: 22 } })))
            .toBe(JSON.stringify([]))
    })

    test('REMOVE_FROM_CART works multiple shopping cart items', () => {
        var state = []
        state = shoppingCart(state, { type: ADD_TO_CART, payload: { id: 22 } })
        state = shoppingCart(state, { type: ADD_TO_CART, payload: { id: 23 } })
        expect(JSON.stringify(shoppingCart(state, { type: REMOVE_FROM_CART, payload: { id: 22 } })))
            .toBe(JSON.stringify([23]))
    })
})