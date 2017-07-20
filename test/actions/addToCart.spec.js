import addToCart from '../../app/actions'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../../app/constants/actionTypes'

describe('addToCart action creator', () => {
    var action = addToCart(22)
    test('type is ADD_TO_CART', () => {
        expect(action.type)
            .toBe(ADD_TO_CART)
    })
    test('saves payload', () => {
        expect(action.payload)
            .toBe(22)
    })
})