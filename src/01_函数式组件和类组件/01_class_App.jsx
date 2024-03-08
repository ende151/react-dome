import React from "react";

class HelloWord extends React.Component {
    constructor(){ 
        super()
        this.state = {
            massage: '你说的你是谁'
        }
    }
    render() {
        const { massage } = this.state
        return (
            <div>我是一个类组件{ massage }</div>
        )
    }
}
export default HelloWord;