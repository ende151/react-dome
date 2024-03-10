import React, { Component } from 'react';

class List extends Component {
    render() {
        console.log( 'list', this.props.list)
        const { list } = this.props;
        const ListEl = list.map((item)=>{
            return (
                <div key={item.acm}>
                    <img src={item.image923} alt={item.title} />
                    <span>{ item.title }</span>
                </div>
            )
        })
        return (
            <div>
                <div>
                    {ListEl}
                </div>
            </div>
        );
    }
}

export default List;