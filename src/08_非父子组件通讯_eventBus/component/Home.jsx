import React, { Component } from 'react';
import Button from './Button';
// import Index from './Index'  


class Home extends Component {
    render() {
        return (
            <div>
                我是Home组件：
                {/* <Index /> */}
                <Button/>
            </div>
        );
    }
}

export default Home;    