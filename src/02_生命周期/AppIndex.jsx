
import React from 'react'

class AppIndex extends React.Component {
  constructor() {
    super()
    this.state = {
      massage: 'Hello, world!'
    }
    console.log('AppIndex constructor','我是构造函数里面的');
  }
  handleMassage() {
    this.setState({
      massage: 'Hello, 世界!'
    })
  }
  render() {
    const {massage} = this.state
    return (
      <div>
        <p>{ massage }</p>
        <p>我是一个组件哈哈哈</p>
        <button onClick={()=>this.handleMassage()}>我是按钮</button>
      </div>
    )
  }
  componentDidMount() {
    console.log('AppIndex componentDidMount','我是挂载的时候现实的')
  }
  getSnapshotBeforeUpdate(prevProps, prevState) {
    return {
      Data : '更新之前的数据100'
    }
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log(prevProps, prevState, snapshot);
    console.log('AppIndex componentDidUpdate','我是更新的时候现实的');
  }
  componentWillUnmount() {
    console.log('AppIndex componentWillUnmount','我是卸载的时候现实的');
  }
}

export default  AppIndex
