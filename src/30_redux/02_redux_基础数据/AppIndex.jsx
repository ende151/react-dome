import React, {PureComponent} from 'react'
import store from './store'

export class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            name:'bbb',
        }
    }
    handNmae(){
        // 获取store里面的数据只能通过  getstate
        // console.log('未修改的数据',store.getState())
        // 修改数据必须通过 action 也就是通过dispatch来触发
        store.dispatch({type:'handle_name',name:this.state.name})
        // console.log(store.getState())
    }

    componentDidMount() {
        const unsubscribe = store.subscribe(()=>{
            console.log('订阅数据',store.getState())
        })
    }
    componentWillUnmount() {
        // 组件销毁取消订阅
        this.unsubscribe()
    }

    render() {
        // console.log('拿到值了', store.getState() )
        return (
            <>
                我是基础内容 哈哈哈
                <button onClick={()=>this.handNmae()}> 点击 </button>
                {/*他是有 state  action   reducer  三个模块组成的*/}
                {/*state 是存储数据的*/}
                {/*action  中书写修改stare的方法    通过 store.dispath({type:xxx_name,})  来调用*/}
                {/*reducer 就是来修改数据后出发*/}
            </>
        )
    }
}

export default App
