import React, { PureComponent, createRef } from 'react'
import ClassDom from './component/classDom';
import FunctionDom from './component/functionDom';


export class AppIndex extends PureComponent {
    constructor(props) {
        super(props);
        this.titleRef = createRef();
        this.titleText = null

        this.classDomRef = createRef();
        this.functionDomRef = createRef();
    }

    // 获取标签dom方法
    getDOM = (e) => {
        // 方法一 ： 直接ref=‘xxx’  这样获取dom元素
        console.log(this.refs.why)

        // 方法二 ： 创建ref对象(createRef)，通过ref.current获取dom元素
        // 官网推荐这个方法获取实例
        console.log(this.titleRef.current)

        // 方法三 ： 
        console.log(this.titleText)
    }

    // 获取组件DOM实例方法
    getCOMDOM(e) {
        console.log('类组件', this.classDomRef.current)
        console.log('函数式组件', this.functionDomRef.current)
    }

    render() {
        return (
            <div>
                {/* <div ref='why'>第一种获取方式</div>
                <div ref={this.titleRef}>第二中获取方式</div>
                <div ref={e => this.titleText = e}>第三种获取方式</div>
                <button onClick={e => this.getDOM(e)}>获取dom</button>  */}
                <ClassDom ref={this.classDomRef} />
                <FunctionDom ref={this.functionDomRef} />
                <button onClick={e => this.getCOMDOM(e)}> 获取DOM</button>
            </div>
        )
    }
}

export default AppIndex
