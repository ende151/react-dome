import React, { PureComponent } from 'react'
// 类组件
class HelloWord extends PureComponent {
  constructor() {
    super()
  }
  render() {
    return (
      <div>
        HelloWord
      </div>
    )
  }
}
// 函数组件
const fun = (prop) => {
  return <div>{'开心的代码'}</div>
}

// 高阶组件
function APP(Cpn) {
  class newCpn extends PureComponent {
    constructor() {
      super()
    }
    render() {
      return (
        <div>
          <Cpn />
        </div>
      )
    }
  }
  return newCpn
}

const Aap = APP(HelloWord)
const Apps = APP(fun)

export class AppIndex extends PureComponent {
  render() {
    return (
      <div>
        我是高阶组件内容
        <Apps />
        <Aap />
      </div>
    )
  }
}

export default AppIndex
