import { forwardRef } from "react"

const functionDom = forwardRef(function (props,ref) {
    return (
        <div ref={ref}>我是函数组件</div>
    )
})

export default functionDom