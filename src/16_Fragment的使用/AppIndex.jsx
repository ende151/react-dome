import React, { PureComponent } from 'react'
import Children01 from './children/children01'
import Children02 from './children/children02'

export class AppIndex extends PureComponent {
  render() {
    return (
      <>
        我是Fragment组件
        <Children01 />
        {/* react 开发中必须有一个根组件   类似vue2中的 templent */}
        {/* 当然也可以使用fragment组件   语法糖就是  <> </>  */}
        <Children02/>
      </>
    )
  }
}

export default AppIndex
