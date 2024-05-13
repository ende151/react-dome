import React, { Component } from 'react';
import ThemeContext from '../context/index';

class HomeTitle extends Component {
    constructor(props) { 
        super()
    }
    render() {
        console.log(this.context)
        return (
            <div>
                {/* 我是第二个子级  */}
                {this.context}
            </div>
        );
    }
}
HomeTitle.contextType = ThemeContext;

export default HomeTitle;


