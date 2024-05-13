import React, { Component } from 'react';
import TitleIndex from './component/titleIndex';


class AppIndex extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                '新年',
                '》快乐《',
                '无忧',
            ]
        }
    }
    render() {
        const { list } =  this.state
        return (
            <div>
                {/* 我是作用域插槽的实现 */}
                <TitleIndex
                    Lists={list}
                    ListType={item => <span>{item}</span>}
                />
            </div>
        );
    }
}

export default AppIndex;
