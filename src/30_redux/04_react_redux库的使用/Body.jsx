import {PureComponent} from "react";
import store from "./store";
import {ADDNUM} from "./actionCreators";
import { connect } from "react-redux";

class Body extends  PureComponent{
    // constructor() {
    //     super();
    //     this.state ={
    //         num: store.getState().num
    //     }
    // }
    // componentDidMount() {
    //     store.subscribe(()=>{
    //         const state = store.getState()
    //         this.setState({num:state.num})
    //     })
    // }
    addNUM(){
        store.dispatch(ADDNUM(1))
    }

    render() {
        const { num } = this.props
        return(
            <div>
                Body:  {num}
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

function  mapStoreToProps (store){
    return {
        num:store.num
    }
}
function  mapActionToProps (store){
    return {
        num:store.num
    }
}

export default connect(mapStoreToProps,mapActionToProps)(Body)
