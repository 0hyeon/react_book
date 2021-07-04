import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class MyComponent extends Component {
    static defaultProps = { 
        name : '기본이름' 
    };
    static propTypes = {
        name: PropTypes.string,
        favorite: PropTypes.number.isRequired
    };
    render() {
        const {name , favorite, children } = this.props;//비구조화 할당 
        return (
            // (...);
            <>
            </>
        )
    }
}

export default MyComponent
