import {PureComponent} from "react";
import store from "./store";
import {actionNum} from "./actionCreators";
import Home from "./home";


class  AppIndex extends  PureComponent{
    constructor( ) {
        super();
        this.state = {
            num: store.getState().num,
        }
    }
    componentDidMount() {
        store.subscribe(()=>{
            const state = store.getState()
            this.setState({num: state.num})
        })
    }

    addNum(){
        store.dispatch(actionNum(1))
    }
    render() {
        const  { num } = this.state
        return (
            <div>
                <h1>AppIndex:{num}</h1>
                <button onClick={()=>{this.addNum()}}>+1</button>
                <div>
                    <Home/>
                </div>
            </div>

        );
    }
}

export  default  AppIndex
