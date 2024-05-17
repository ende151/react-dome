import React, { PureComponent } from 'react'
import Home from './Home/Home'
import Page from './page/Page'
// import './App.css'
import AppStyle  from './App.module.css'

export class App extends PureComponent {
    render() {
        return (
            <div>
                <div className={AppStyle.title}>
                    我是内容一
                </div>
                <Home />
                <Page/>
            </div>
        )
    }
}

export default App
