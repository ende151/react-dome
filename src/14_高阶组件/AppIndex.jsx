import React, { PureComponent } from 'react'
import isTime from './HOC/is_render_time'

export class AppIndex extends PureComponent {

    // UNSAFE_componentWillMount() { 
    //     this.startTime = new Date()
    // }

    // componentDidMount() { 
    //     this.endTime = new Date()
    //     this.time = this.endTime - this.startTime
    //     console.log(`当先组件渲染了${this.time }ms`)
    // }

  render() {
    return (
      <div>我是练习的页面</div>
    )
  }
}

export default isTime(AppIndex )