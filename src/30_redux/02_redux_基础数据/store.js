import {createStore} from "redux";


const initValue = {
    name: 'aaa',
    age: 19
}

function createdReducer(state = initValue, action) {
    if (action.type == 'handle_name') {
        return {...state, name: action.name}
    }
    return state
}

const store = createStore(createdReducer)

export default store
