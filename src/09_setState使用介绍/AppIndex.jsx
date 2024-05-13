import React, { Component } from 'react';
import Home from './Home';
import Info from './info'

class AppIndex extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            activeIndex: 1
        }
    }


    // setState是异步的（批量更新）
    // 本次更新会加入队列中queue
    // 两个优势
    //              1.多个更新放在同义词更新中，执行一次render函数，提高性能
    //              2.保证state没有被更新的时候，state/props保持一致

    // 一定是异步的吗？
    // react 18之前
    //     定时器 .then  原生Dom事件回调中   是同步的
    // 18之后 所有都是异步的 进行统一处理
    // flushSync的回调可以做同步的渲染


    handleIndex() {
        this.setState((state,props) => {
            console.log(state, props)
            return {
                activeIndex: this.state.activeIndex + 1
            }
        })
        // this.setState({
        //     activeIndex: this.state.activeIndex + 1
        // }, () => {
        //     console.log('我是setState的回调函数', this.state.activeIndex);
        // })
        // console.log('证明是异步执行', this.state.activeIndex);
    }
    render() {
        const { activeIndex } = this.state
        return (
            <div>
                {/* 我是数量
                <div>
                    {activeIndex}
                </div>
                <button onClick={() => this.handleIndex()}>修改文件</button> */}
                <Home />
                <Info />
            </div>
        );
    }
}

export default AppIndex;