
import React, { PureComponent } from 'react'
import './Home.css'

export class Home extends PureComponent {
    render() {
        return (
            <div>
                <div className='cont'>
                    我是Home
                </div>
                <div className='title'>
                    我是title的颜色
                </div>
            </div>
        )
    }
}

export default Home
