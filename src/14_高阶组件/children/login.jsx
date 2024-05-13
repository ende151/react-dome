import React, { PureComponent } from 'react'
import isLoginType from '../HOC/login'

export class Login extends PureComponent {
    render() {
        return (
            <div>我是登录的</div>
        )
    }
}

export default isLoginType(Login)