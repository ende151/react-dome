import { logDOM } from '@testing-library/react'
import React, { Component, PureComponent } from 'react'



export class Index extends PureComponent { 
  constructor(props) {
    super(props)
  }
  // shouldComponentUpdate = (nextProps, nextState) => {
  //   return false
  // }
  
  render() { 
    console.log('在变化' )
        const {  number } = this.props
        return (
          <div>
            index组件： {number}
          </div>
        )
  }
}
export default Index




// export class Index extends Component {
//   shouldComponentUpdate = (nextProps, nextState) => {
//     // console.log(nextProps)
//     // if (nextProps.number !== this.props.number) {
//     //   console.log('禁止哦！')
//     //   return false
//     // }
//     // console.log('允许的')
//     return true
//   }

//   // 针对类组件 性能优化  react 官方给出了  PureComponent 这个api
//   // 用来替换或者继承 scu 他的用途 
//   // 当数据发生变化时将不再需 scu 对数据进行比较控制内容的渲染

  
//   render() {
//     console.log('Index render')
//     const {  number } = this.props
//     return (
//       <div>
//         index组件： {number}
//       </div>
//     )
//   }
// }

// export default Index
