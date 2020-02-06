import {combineReducers} from 'redux';
import {sessionErrorsReducer} from './session_errors_reducers';


export const errorsReducer = combineReducers ({session: sessionErrorsReducer});


