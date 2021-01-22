import botListReducer from './botListReducer'
import modalReducer from './modalReducer'
import reportListReducer from './reportListReducer'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    //we access this by any key we want
    botList: botListReducer,
    modals: modalReducer,
    report:reportListReducer
})
export default allReducers