import {PureComponent} from "react";
import store from "./store";


class Home extends  PureComponent{
    constructor() {
        super();
        this.state ={
            num: store.getState().num
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            const state = store.getState()
            this.setState({num:state.num})
        })
    }
    render() {
        const { num } = this.state
        return(
            <div>
               Home:  {num}
            </div>
        )
    }
}

export  default  Home
