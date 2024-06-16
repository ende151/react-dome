import React from 'react';
// import HelloWord from './01_函数式组件和类组件/01_class_App';
// import App from './01_函数式组件和类组件/02_func_App';
// import AppIndex from './02_生命周期/AppIndex';
// import App from './03_组件拆分和嵌套关系/App';
// import AppIndex from './04_父子组件通讯/AppIndex';
// import AppIndex from './05_react实现插槽效果/AppIndex';
// import AppIndex from './06_react实现作用域插槽/AppIndex'
// import AppIndex from './07_Context/AppIndex'
// import AppIndex from './08_非父子组件通讯_eventBus/AppIndex'
// import AppIndex from './09_setState使用介绍/AppIndex'
// import AppIndex from './10_不可变得数据/AppIndex'
// import AppIndex from './11_render函数优化/AppIndex';
// import AppIndex from './12_ref获取DOM和组件实例/AppIndex';
// import AppIndex from './13_非受控组件和受控组件/AppIndex';
// import AppIndex from './14_高阶组件/01_高阶组件的基本';
// import AppIndex from './14_高阶组件/02_高阶组件的基本使用';
// import AppIndex from './14_高阶组件/03_高阶组件context的使用';
// import AppIndex from './14_高阶组件/AppIndex';
// import AppIndex from './15_protal的使用/AppIndex';
// import AppIndex from './16_Fragment的使用/AppIndex';


// import AppIndex from './20_css样式编写要求/AppIndex';


// import AppIndex from "./30_redux/01_Redux的基本理念/AppIndex";
// import AppIndex from "./30_redux/02_redux_基础数据/AppIndex";
import AppIndex from "./30_redux/03_Redux优化/AppIndex";

class MyComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            massage: "Hello world",
            // isShow: true
        }
    }
    handleIsShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() {
        // const {isShow} = this.state;
        return (
            <div>
                <AppIndex />
                {/* <AppIndex age="20"/> */}
                {/* <AppIndex
                    leftSlot={111}
                    centerSlot={222}
                    rightSlot={333}
                /> */}
                {/* <AppIndex/> */}
                {/* <AppIndex>
                    <button>电话</button>
                    <h2>中间内容</h2>
                    <i>倾斜的内容</i>
                </AppIndex> */}
                {/* <button onClick={e => this.handleIsShow()}>隐藏整个内容</button> */}
                {/* <App/> */}
                {/* { isShow && <AppIndex /> } */}
                {/* <div> 我是一个组件：{massage} </div> */}
                {/* <HelloWord/>
                <App/> */}
            </div>
        )
    }
}

export default MyComponent;
