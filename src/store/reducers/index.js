import botListReducer from './botListReducer';
import modalReducer from './modalReducer';
import reportListReducer from './reportListReducer';
import entityReducer from './entityReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    //we access this by any key we want
    botList: botListReducer,
    modals: modalReducer,
    report: reportListReducer,
    entity: entityReducer
});

export default allReducers;