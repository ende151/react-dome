import React, { PureComponent } from 'react'
import Login01 from './children/login01'

export class AppIndex extends PureComponent {
  isLogin01() { 
    localStorage.setItem('token','222222222222222222')
  }
  render() {
    return (
      <div>
        我是登录页面
        哈哈哈
        <Login01 isLogin01={ e => this.isLogin01()}   />
      </div>
    )
  }
}

export default AppIndex
