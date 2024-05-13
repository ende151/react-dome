import React, { Component } from 'react' 
import ThemeContext from '../context'
function HomeBanner() {
    return (
        < div > HomeBanner : 我是函数组件
        <ThemeContext.Consumer>
                {
                    value  => {
                        return <p>{value}</p>
                    }
                }
            </ThemeContext.Consumer>
        </div >
    )
}
export default HomeBanner