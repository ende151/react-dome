import React, { Component } from 'react';
import ChildrenTitle from './component/childrenTitle';
import Children1 from './component/children1';
import Children2 from './component/children2';
import Children3 from './component/children3';

class AppIndex extends Component {
    constructor(props) { 
        super(props);
        this.state = {
            list: [
                {
                    id: 1,
                    name: '标题一',
                    title:'Children1'
                },
                {
                    id: 2,
                    name: '标题二',
                    title: 'Children2'
                },
                {
                    id: 3,
                    name: '标题三',
                    title: 'Children3'
                }
            ],
            activeIndex: 1
        }
    }
    changeID(data) {
        // console.log('我是changeID方法', data)
        this.setState({ activeIndex:data.id})
    }
    render() {
        const { list, activeIndex } = this.state;
        return (
            <div>
                <ChildrenTitle activeIndex={activeIndex} list={list} changeID={(data) => this.changeID(data)} />
                {
                    activeIndex == 1 ? <Children1 /> : activeIndex == 2 ? <Children2 /> : <Children3 />
                }
            </div>
        );
    }
}

export default AppIndex;