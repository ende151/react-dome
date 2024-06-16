import React, {PureComponent} from 'react'

export class App extends PureComponent {
    constructor() {
        super()
    }

    render() {
        return (
            <>
                我是基础内容 哈哈哈
                {/*他是有 state  action   reducer  三个模块组成的*/}
                {/*state 是存储数据的*/}
                {/*action  中书写修改stare的方法    通过 store.dispath({type:xxx_name,})  来调用*/}
                {/*reducer 就是来修改数据后出发*/}
            </>
        )
    }
}

export default App
