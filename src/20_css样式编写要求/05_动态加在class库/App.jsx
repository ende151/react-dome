import React, {PureComponent} from 'react'
import classNames from "classnames";
import './index.css'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            color: 'red',
            isB:true,
        }
    }

    render() {
        const { isB } = this.state
        const Top = ['aaa']
        // const {  color } = this.state
        return (
            <>
                我是内容信息
                <div className={Top}>
                    我是自己设置的内容
                </div> <div className={classNames("aaa", { bbb:isB })}>
                    我是要使用classNames实现样式编写的
                </div>
            </>
        )
    }
}

export default App
