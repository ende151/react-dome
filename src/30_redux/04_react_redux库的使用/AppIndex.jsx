import {PureComponent} from "react";
import store from "./store";
import Home from "./Home";
import About from "./About";
import Banner from "../../03_组件拆分和嵌套关系/component/Banner";
import Body from "./Body";


class AppIndex extends  PureComponent{
    constructor(props) {
        super(props);
        this.state = {
            num:store.getState().num
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            const state = store.getState()
            this.setState({num:state.num})
        })
    }
    render (){
        const {num,con} =this.state
        return (
            <>
                我是AppIndex组件：{num}
                <Home/>
                <About/>
                <Body/>
            </>
        )
    }
}

export  default  AppIndex
