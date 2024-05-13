import React, { PureComponent } from 'react'
import isLogin01 from '../HOC/logins'

export class login01 extends PureComponent {
    login02() { 
        localStorage.removeItem('token')
    }
    render() {
        return (
            <div>
                我是登录按钮
                哈哈哈 额~~
                <button onClick={e => this.login02()}>退出</button>
            </div>
        )
    }
}

export default isLogin01(login01)
