import React, { PureComponent } from 'react'
import newCom from '../HOC/contextHoc'

export class children01 extends PureComponent {
    render() {
        return (
            <div>
                我是孩子一号:{this.props.name}
            </div>
        )
    }
}

export default newCom(children01)
