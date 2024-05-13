import React, { PureComponent } from 'react'
function computed(Com) {
    class newCom extends PureComponent {
        constructor() {
            super()
            this.state = {
                count: 0,
                name: '张三',
                age: 18,
            }
        }
        render() {
            return (
                <div>
                    <Com {...this.state} />
                </div>
            )
        }
    }
    return newCom
}

export default computed