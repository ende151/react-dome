import * as actionTypes from "./constants";


const initialState = {
    num: 10,
}

function renducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.ADD_NUM:
            return {...state, num: state.num + action.num}
        default:
            return state
    }
}

export default renducer
