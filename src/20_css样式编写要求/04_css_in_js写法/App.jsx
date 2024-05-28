
import React, { PureComponent } from 'react'
import { Title, HHHH, DefaultStyle } from './style/App'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            color: 'red'
        }

    }
    render() {
        const {  color } = this.state
        return (
            <Title>
                <div className='content'>我是app组件</div>
                <HHHH color={color}>
                    我是头部内容
                    <p>11111</p>
                    <div>22222</div>
                </HHHH>
                <DefaultStyle color={color}>
                    我是身体
                    <span>
                        33333
                    </span>
                </DefaultStyle>
                <div className='footer'>
                    我是底部
                    <span>
                        99999
                    </span>
                </div>
            </Title>
        )
    }
}

export default App