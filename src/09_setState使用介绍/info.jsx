
import React, { Component } from 'react';

class info extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num:1,
            list: [
                {
                    id: 1,
                    name: '标题一',
                    title: 'Children1'
                },
                {
                    id: 2,
                    name: '标题二',
                    title: 'Children2'
                },
                {
                    id: 3,
                }]
        }
    }
    handleNum() {
        console.log(this.state)
        // 一般常规写法  但是异步执行
        // this.setState({
        //     num: this.state.num + 1
        // })



        // 回调函数形式
        // 可以及时拿到最新的数据
        // 也可以接收到父组件传递过来的数据 props 和自己本身的state数据
        // this.setState(() => {
        //     return {
        //         num: this.state.num + 1
        //     }
        // })


        // 可以写第二个参数 回调函数
        this.setState((state,props) => { 
            return {
                num: state.num + 1
            }
        }, () => { 
            console.log('拿到最新的数据了',this.state)
        })
        
    }

    render() {
        const { list, num } = this.state;
        return (
            <div>
                我是info组件
                我要展示三种不同的this.setState方法
                <div>
                    num ： -- {num}
                </div>
                <button onClick={(e) => this.handleNum()}>点击我修改num</button>
            </div>
        );
    }
}

export default info;