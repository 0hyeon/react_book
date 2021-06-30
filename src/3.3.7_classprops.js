import React, { Component }from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    render() {
        const { name,favoriteNumber,children } = this.props;//비구조화 할당 
        return(
            <div>
                my name is {name} <br />
                children is {children} <br />
                favoriteNumber is {favoriteNumber}
            </div>
        );
    }
}

MyComponent.defaultProps = {
    name: '기본이름'
};
MyComponent.propTypes = {
    name: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
};
export default MyComponent;