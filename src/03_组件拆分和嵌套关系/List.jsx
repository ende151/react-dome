import React from 'react'

class ListMap extends React.Component{
    constructor() {
        super();
        this.state = {
            list: [
                {
                    id: 1,
                    name: '张三',
                    age: 18,
                    money: 101,
                },
                {
                    id: 2,
                    name: '李四',
                    age: 6,
                    money: 300,
                },
                {
                    id: 3,
                    name: '王五',
                    age: 20,
                    money: 99,
                },
            ]
        }
    }
    delListIndex(index) {
        const listData = this.state.list
        listData.splice(index, 1)
        this.setState({
            list: listData  
        })
    }
    handleMoney(index,type){
        const listData = this.state.list
        // for(let i = 0; i < listData.length; i++){
        //     listData[i].money += type
        // }
        listData[index].money += type
        this.setState({
            list:listData
        })
    }
    render() {
        const { list } = this.state
        const listElement = list.map((item,index) => {
            return (

                <div key={index}>
                    <span>{ item.id }   </span>
                    <span>{ item.name } </span>
                    <span>{ item.age } </span>
                    <span style={{ display: 'inline-block' }}>
                        <button onClick={() => this.handleMoney(index,-1)}>减</button>
                        {item.money}
                        <button onClick={() => this.handleMoney(index,1)}>加</button>
                    </span>
                    <span style={{display:'inline-block'}}><button onClick={()=>this.delListIndex(index)}>删</button> </span>
                </div>
            )
        })
        return (
            <div>
                {listElement}
            </div>
        )
    }
}
export default ListMap;