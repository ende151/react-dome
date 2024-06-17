import {PureComponent} from "react";
import store from "./store";
import {ADDNUM} from "./actionCreators";


class About extends  PureComponent{
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
    addNUM(){
        store.dispatch(ADDNUM(1))
        store.dispatch(ADDNUM(1))
    }

    render() {
        const { num } = this.state
        return(
            <div>
                about:  {num}
                <div>
                    <button onClick={() => {
                        this.addNUM()
                    }}> +1
                    </button>
                </div>
            </div>
        )
    }
}

export default  About
