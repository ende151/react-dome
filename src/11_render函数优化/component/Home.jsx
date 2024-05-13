// import React, { Component } from 'react'

// export class Home extends Component {
//   render() {
//     console.log('Home render')
//     return (
//       <div>
//         Home组件:
//       </div>
//     )
//   }
// }

// export default Home




// 函数组件没有生命周期  所以函数式组件时刻渲染
// 为了解决这一问题 react官方出了  meno
// 将需要的组件内容进行包裹
// 自身数据发生变化时才渲染
// 自身数据不发生变化时不渲染

import { memo } from "react"

const Home = function (props) {
  console.log('Home render',)
  return (
    <div>我是Home组件 :{props.number}</div>
  )
}


export default memo(Home)
// export default Home