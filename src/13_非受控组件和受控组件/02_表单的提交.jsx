import React, { PureComponent } from 'react'

export class AppIndex extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        console.log(this.state)
    }
    handleBlur(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        const { username, password } = this.state
        return (
            <div>
                我是表单信息
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="username">
                        用户名： <input type="text" name='username' id='username' value={username} onChange={e => this.handleBlur(e)} />
                    </label>
                    <label htmlFor="password">
                        用户名： <input type="password" name='password' id='password' value={password} onChange={e => this.handleBlur(e)} />
                    </label>
                    <button type='submit'>注册</button>
                </form>
            </div>
        )
    }
}

export default AppIndex
