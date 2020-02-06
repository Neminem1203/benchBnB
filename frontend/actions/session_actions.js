import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOG_OUT = 'LOG_OUT';
export const RECEIVE_ERRORS = 'RECEIVE_ERRORS';


export const login = (user) => (dispatch) => {
  dispatch (SessionAPIUtil.login(user))
  .then(payload => dispatch(receiveCurrentUser(payload), errors => dispatch(receiveErrors(errors))));
};

export const logout = () => (dispatch) => {
  dispatch (SessionAPIUtil.logout())
  .then(payload => dispatch(logoutCurrentUser()), errors => dispatch(receiveErrors(errors)));
};

export const signup = (user) => (dispatch) => {
  dispatch (SessionAPIUtil.signup(user))
  .then(payload => dispatch(receiveCurrentUser(payload)),  errors => dispatch(receiveErrors(errors)));
};

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    user: currentUser
  };
};

export const logoutCurrentUser = () =>{
  return {
    type: LOG_OUT
  };
};

export const receiveErrors = (errors) =>{
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};