import React, { PureComponent } from 'react'
import orginComponent from './HOC/orginComputed'



const Home = orginComponent((prop) => <div>Home:{prop.name}</div>)


const About = orginComponent((prop) => <div>About:{prop.age}</div>)


export class AppIndex extends PureComponent {
    render() {
        return (
            <div>

                <Home />
                <About />
            </div>
        )
    }
}

export default AppIndex