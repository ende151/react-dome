import React, { Component } from 'react';


class index extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        const { data } = this.props
        console.log(data)
        return (
            <div>
                我是Index组件：
                {data}
            </div>
        );
    }
}

export default index;