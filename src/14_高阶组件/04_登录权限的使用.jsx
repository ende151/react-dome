import React, { PureComponent } from 'react'
import newContext from './HOC/context'
// import ChildrenO1 from './children/children01'
import Login from './children/login'

export class AppIndex extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }
  handleIsLogin() {
    this.setState({
      isLogin: true
    })
  }
  Logins() {
    localStorage.setItem('token', '123123')
    this.forceUpdate()
  }
  Loginse() {
    localStorage.removeItem('token')
    this.forceUpdate()
  }

  render() {
    const { isLogin } = this.state
    return (
      <div>
        <button onClick={e => this.Logins(e)}>登录</button>
        <button onClick={e => this.Loginse(e)}>注销</button>
        <newContext.Provider>
          <Login />
          {/* <ChildrenO1 /> */}
          {/* {
            isLogin ?
              <Login /> : <div onClick={() =>this.handleIsLogin()  } >{"请登录"}</div>
          } */}
        </newContext.Provider>
      </div>
    )
  }
}

export default AppIndex