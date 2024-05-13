import React, { Component } from 'react';
import { flushSync } from 'react-dom'

class Home extends Component {
    constructor() {
        super()
        this.state = {
            age: 111,
        }
    }
    handleAge() {
        // react 18之前 setTimeOut(()=>{}) 可以将setState放到宏任务队列中执行（实现同步操作）
        // react 18之后 默认所有的都被放到了批处理中

        // this.setState({
        //     age: this.state.age + 1
        // })

        // react 18 新特性  批处理 为了更好的性能  原生的dom操作或者settimeout、promise 不可以实现同步更新
        // 如果需要实现18之前的同步效果（不进行批处理） 可以使用 flushSync 进行这个操作
     
        // setTimeout(() => {
            flushSync(() => {
                this.setState({
                    age: this.state.age + 1
                })
            })
            console.log(this.state.age)
        // }, 0)
    }
    render() {
        console.log('render执行了')
        const { age } = this.state
        return (
            <div>
                我是Home页面：
                <div>
                    {age}
                </div>
                这是我的年龄
                <button onClick={() => this.handleAge()}>修改年龄</button>
            </div>
        );
    }
}

export default Home;        