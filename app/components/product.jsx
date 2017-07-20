import React from 'react'
import { PropTypes  } from 'prop-types'

class Product extends React.Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        cost: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired
    }
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        console.log('component mounted')
    }
    render() {
        let { name, cost, description } = this.props
        return (
            <section>
                <h2>{name} ${cost}</h2>
                <p>{description}</p>
            </section>
        )
    }
}
export default Product
