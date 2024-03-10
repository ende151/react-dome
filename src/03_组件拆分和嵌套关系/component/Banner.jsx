import React, { Component } from 'react';

class Banner extends Component {
    render() {
        const {num} =  this.props
        return (
            <div>
                <span>{ num }</span>                
            </div>
        );
    }
}

export default Banner;