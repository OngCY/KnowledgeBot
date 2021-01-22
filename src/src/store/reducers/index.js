import botListReducer from './botListReducer'
import modalReducer from './modalReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    //we access this by any key we want
    botList: botListReducer,
    modals: modalReducer
})
export default allReducers