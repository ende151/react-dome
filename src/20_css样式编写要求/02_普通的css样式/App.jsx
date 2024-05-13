import React, { PureComponent } from 'react'
import './style.css'

export class App extends PureComponent {
    render() {
        return (
            <div>
                <h2 className='title'>我是普通样式标题</h2>
                <p className='content'>我是普通样式的内容</p>
            </div>
        )
    }
}

export default App
 