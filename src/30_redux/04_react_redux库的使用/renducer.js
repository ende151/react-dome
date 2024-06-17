import  * as types from './types'

const initalState = {
    num:11
}

function  renducer(state = initalState,action){
    switch (action.type){
        case types.ADD_NUM:
            return { ...state,num:state.num + action.num }
        default:
            return state
    }
}

export  default  renducer
