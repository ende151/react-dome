
import React, { PureComponent } from 'react'
function isTime(Com) {

    return class is_render_time extends PureComponent {

        UNSAFE_componentWillMount() {
            this.startTime = new Date()
        }

        componentDidMount() {
            this.endTime = new Date()
            const time = this.endTime - this.startTime
            console.log(`当先组件渲染了${time}ms`)
        }

        render() {
            return (
                <div>
                    <Com {...origin} />
                </div>
            )
        }
    }

}

export default isTime