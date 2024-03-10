import React, { Component } from 'react';
import Banner from './component/Banner';
import List from './component/List';
import axios from 'axios'

class App extends Component {
    constructor() {
        super();
        this.state = {
            num: 111,
            list: []
        }
    }
    componentDidMount() { 
       this.getList()
    }
    getList = ()=>{
         axios.get('http://123.207.32.32:8000/home/multidata').then(res => {
            console.log(res.data.data.banner.list)
            if (res.status == 200) {
                this.setState({
                    list: res.data.data.banner.list
                })
            }
        })
    }
    render() {
        const {num,list } = this.state
        return (
            <div>
                <Banner num={num} />
                <List list={ list } />
            </div>
        );
    }
}

export default App;