import AddProduct from '../../app/components/addProduct.jsx'
import { shallow } from 'enzyme'
import React from 'react'

describe('<AddProduct />', () => {
    let handleClick = jest.fn()
    let wrapper = shallow(<AddProduct handleClick={handleClick} />)
    test('it responds to click events', () => {
        wrapper.find('button').simulate('click')
        expect(handleClick).toHaveBeenCalledTimes(1)
    })
    test('Has exactly on h2 tag', () => {
        expect(wrapper.find('h2'))
            .toHaveLength(1)
    })
})