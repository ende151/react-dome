
function isLoginType(Com) {
    return props => {
        const isLogin = localStorage.getItem('token');
        if (isLogin) {
            return <Com />
        } else {
            return <div>请登录</div>
        }
    }
}

export default isLoginType