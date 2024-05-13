
function isLogin01(Com) {

    return props => {
        const isToken = localStorage.getItem('token')
        if (isToken) {
            return <Com {...props} />
        } else {
            // return <button onClick={e => { this.props.isLoginFn() }}>去登录</button>
            return <div>我没有登录</div>
        }
    }
}

export default isLogin01
