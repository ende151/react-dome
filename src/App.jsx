import React from 'react';
// import HelloWord from './01_函数式组件和类组件/01_class_App';
// import App from './01_函数式组件和类组件/02_func_App';
import AppIndex from './02_生命周期/AppIndex';


class MyComponent extends React.Component { 
    constructor() {
        super()
        this.state = {
            massage: "Hello world",
            isShow: true
        }
    }
    handleIsShow() {
        this.setState({
            isShow: !this.state.isShow
        })
    }
    render() { 
        const {massage,isShow} = this.state;
        return (
            <div>
                <button onClick={e=>this.handleIsShow()}>隐藏整个内容</button>
                { isShow && <AppIndex /> }
                {/* <div> 我是一个组件：{massage} </div> */}
                {/* <HelloWord/>
                <App/> */}
            </div>
        )
    }
}

export default MyComponent;