import React, { PureComponent } from 'react'

export class AppIndex extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            value: '123'
        }
    }

    onValueChange(e) {
        console.log('获取输入的内容信息', e.target.value)
        this.setState({
            value: e.target.value
        })
    }

    render() {
        const { value } = this.state

        return (
            <div>
                {/* 

                    一旦表单元素被绑定 value 属性，那么组件就变成了受控组件
                    如果没有绑定onChange事件的话  你做任何操作都是没有用的 

                    通过受控组件 对表单元素进行操作

                    react是没有双向绑定的
                    所以在操作的时候需要绑定onChange的时候  拿到target.value


                    受控组件和非受控组件的区别
                        非受控组件是自己控制的
                        受控组件是由react帮你控制的 

                */}
                我是受控非受控组件
                <input type="text" value={value} onChange={(e) => {
                    this.onValueChange(e)
                }} />
                <div>
                    {value}
                </div>
            </div>
        )
    }
}

export default AppIndex
