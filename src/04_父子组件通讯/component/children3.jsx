import React, { Component } from 'react';

class children3 extends Component {
    render() {
        return (
            <div>
                我是子级3
            </div>
        );
    }
    componentDidMount() {
        console.log('我是子级3')
    }
}
export default children3;