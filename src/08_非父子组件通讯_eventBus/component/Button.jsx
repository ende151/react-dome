import React, { Component } from 'react';
import eventBus from '../util/eventBus'

class Button extends Component {

    BtnNext() {
        eventBus.emit('next', {
            name: '张大帅',
            age: 20,
        })
    }
    BtnPor() {
        console.log('我点击上一步',)
        eventBus.emit('por', {
            name: '上一步 ',
            age: 10,
        })
    }
    render() {
        return (
            <div>
                <div>
                    {/* <Index/> */}
                    <button onClick={() => this.BtnPor()}>上一步</button>
                    <button onClick={() => this.BtnNext()}>下一步</button>
                </div>
            </div>
        );
    }
}

export default Button;