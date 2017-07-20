import Product from '../../app/components/product.jsx'
import { shallow, mount } from 'enzyme'
import React from 'react'

describe('<Product />', () => {
    let car = "Mark's honda car"
    var wrapper = shallow(<Product name='insight' cost={500} description={car} />)
    test('Has exactly on h2 tag', () => {
        expect(wrapper.find('h2').length)
        .toBe(1)
    })
    test('id should render a product desciption', () => {
        expect(wrapper.find('p').text())
        .toBe(car)
    })
    test('it should call componentDidMount once', () => {
        let spy = jest.spyOn(Product.prototype, 'componentDidMount')
        let wrapper = mount(<Product name='insight' cost={500} description={car} />)
        expect(spy).toHaveBeenCalledTimes(1)
        spy.mockRestore()
    })
})
