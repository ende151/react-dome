import React, { Component } from 'react'
import Home from './component/Home'
import Index from './component/Index'

export class AppIndex extends Component {
  constructor() {
    super()
    this.state = {
      massage: 'Hello Word',
      number: 1,
    }
  }
  handleNumber() {
    // this.setState({
    //   number: this.state.number + 1,
    // })
    this.setState({
      number: this.state.number + 1,
      // massage: 'Hello Word！',
    }, () => {
      // console.log('这里是同步哦', this.state.number)

    })
    // console.log('this.state 证明是异步函数程序', this.state.number)
  }
  render() {
    console.log('App render', )
    const { massage, number } = this.state
    return (
      <div>
        我是appindex组件 : {massage} -- {number}
        <button onClick={(e) => this.handleNumber()}>数量+ 1 </button>
        <Home number={number} />
        <Index number={number} />
      </div>
    )
  }
}

export default AppIndex
