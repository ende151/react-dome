import React, { PureComponent } from 'react'

export class AppIndex extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            isArgee: true,
            food: ['1'],
            choice: [
                {
                    value: '1',
                    name: '篮球',
                    isCheck: false,
                },
                {
                    value: '2',
                    name: '足球',
                    isCheck: true,
                },
                {
                    value: '3',
                    name: '排球',
                    isCheck: false,
                },
            ],
        }
    }
    handleSubmit(e) {
        e.preventDefault()
        // console.log('提交表单信息', this.state)
        const choice = this.state.choice.filter(item => item.isCheck).map(e => e.value)
        console.log('爱好信息', choice)
    }
    handleBlur(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // 复选框事件
    handleisArgee(e) {
        this.setState({
            isArgee: e.target.checked,
        })
    }
    // 多选框事件
    handlecheckbox(e, index) {
        const choice = [...this.state.choice]
        choice[index].isCheck = e.target.checked
        this.setState({
            choice,
        })
    }
    // 下拉单选
    handleSel(e) {
        // this.setState({
        //     food: e.target.value,
        // } )
        const array = Array.from(e.target.selectedOptions)
        
        console.log(array[0].value)
    }

    render() {
        const { username, password, isArgee, choice, food } = this.state
        return (
            <div>
                我是表单信息
                <form onSubmit={e => this.handleSubmit(e)}>
                    <div>
                        <label htmlFor="username">
                            用户名： <input type="text" name='username' id='username' value={username} onChange={e => this.handleBlur(e)} />
                        </label>
                    </div>
                    <div>
                        <label htmlFor="password">
                            密&ensp;&ensp;码： <input type="password" name='password' id='password' value={password} onChange={e => this.handleBlur(e)} />
                        </label>
                    </div>
                    <div>
                        爱&ensp;&ensp;好： {
                            choice.map((item, index) => {
                                return (<label htmlFor={item.value}>
                                    <input type="checkbox" key={item.value} name='choice' id={item.value} checked={item.isCheck} onChange={e => this.handlecheckbox(e, index)} />
                                    <span>{item.name}</span>
                                </label>)
                            })
                        }
                    </div>
                    <div>
                        饮&ensp;&ensp;食：
                        <select value={food} onChange={e => this.handleSel(e)} multiple>
                            <option value="1">苹果</option>
                            <option value="2">香蕉</option>
                            <option value="3">橙子</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="isArgee">
                            <input type="checkbox" name='isArgee' id='isArgee' checked={isArgee} onChange={e => this.handleisArgee(e)} />同意协议
                        </label>
                    </div>
                    <button type='submit'>注册</button>
                </form>
            </div>
        )
    }
}

export default AppIndex
