import { combineReducers } from 'redux';
import  registrationReducer  from './registrationReducer';

const allReducers = combineReducers({
    registrationReducer
});

export default allReducers;