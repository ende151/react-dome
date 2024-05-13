import React, { PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            titleColor: 'red',
            titleSize: 30,
        }
    }
    handleSize() {
        this.setState({
            titleSize: this.state.titleSize + 10
        })
    }
    render() {
        const { titleColor, titleSize } = this.state
        return (
            <div>
                我是内联样式
                <button onClick={e => this.handleSize(e)}>修改标题大小</button>
                <h2 style={{ fontSize: titleSize, color: titleColor }}>我是标题</h2>
                <p>我是  内容</p>
            </div>
        )
    }
}

export default App
