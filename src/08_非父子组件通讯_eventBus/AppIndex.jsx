import React, { Component } from 'react';
import Home from './component/Home';
import eventBus from './util/eventBus';
import Index from './component/Index'


class AppIndex extends Component {

    constructor(props) {
        super()
        this.state = {
            name: '',
            age: 0,
        }
    }
    nextOn(data) {
        this.setState({
            name: data.name,
            age: data.age
        })
    }
    LastOn(data) {
        this.setState({
            name: data.name,
            age: data.age
        })
    }
    componentDidMount() {
        eventBus.on('next', (data) => {
            this.nextOn(data)
            console.log('AppIndex组件接受到事件：', data);
        }, this);
        eventBus.on('por', (data) => {
            this.LastOn(data)
            console.log('上一步了', data);
        }, this);
    }

    render() {
        const { age, name } = this.state
        return (
            <div>
                <div>
                    我是AppIndex组件：
                    <span>name: {name}</span>
                    <span>age: {age}</span>
                    <Home />
                    <Index data={name} />
                </div>
            </div>
        );
    }
}

export default AppIndex;