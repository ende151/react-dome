import React, { PureComponent } from 'react'
import newContext from './HOC/context'
import Children01 from './children/children01'
export class AppIndex extends PureComponent {
    constructor(props) {
        super(props)
        this.state = {
            name: 'coderwhy',
            color: 'red'
        }
    }
    handle() {
        Promise.resolve().then(() => { console.log(1) }).catch(() => { console.log(2) }).then(() => { console.log(3) })
    }
    render() {
        return (
            <div>
                <newContext.Provider value={this.state}>
                    <Children01 />
                </newContext.Provider>
            </div>
        )
    }
}

export default AppIndex
