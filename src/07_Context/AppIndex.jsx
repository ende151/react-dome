import React, { Component } from 'react';
import HomeInfo from './component/HomeInfo';
import ThemeContext from './context';
class AppIndex extends Component {
    constructor() {
        super()
        this.state = {
            massage: "Hello world",
            // isShow: true
        }
    }
    render() {
        const { massage } = this.state
        return (
            <div>
                我是context的子组件
                <ThemeContext.Provider value={massage}>
                    <HomeInfo />
                </ThemeContext.Provider>
            </div>
        );
    }
}

export default AppIndex;