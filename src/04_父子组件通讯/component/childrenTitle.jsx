import React, { Component } from 'react';

class childrenTitle extends Component {
    handleTitle(item) {
        // console.log('我是点击的啊', item)
        this.props.changeID(item)
    }
    render() {
        const { list, activeIndex } = this.props;
        return (
            <div>
                <div style={{ display: 'flex', width:'200px',justifyContent:'space-between'}}>
                    {
                        list.map((item) => {
                            return (
                                <div key={item.id} onClick={() => this.handleTitle(item)} style={{ color : activeIndex === item.id ? 'red' : '' }}>{item.name}</div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default childrenTitle;