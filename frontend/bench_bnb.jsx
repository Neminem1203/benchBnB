import React from "react";
import ReactDOM from "react-dom";
import configureStore from './store/store';
import Root from './components/root';

// testing purposes
import {fetchBenches} from "./actions/benches_actions";
// import {} from './util/session_api_util';
import {signup, login, logout} from "./actions/session_actions";

let preloadedState = {}
document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  if(window.currentUser){
    const user = window.currentUser;
    preloadedState = {
      entities:{
        users:{[user.id] : user}
      },
      session: {id: window.currentUser.id}
    };
    delete window.currentUser;
    ReactDOM.render(<h1>Nothing to see here</h1>, document.getElementById("private-information") );
  }
  const store = configureStore(preloadedState);
  ReactDOM.render(<Root store={store}/>, root);

  // Testing Purposes
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.signup = signup; 
  window.login = login; 
  window.logout = logout;
  window.fetchBenches = fetchBenches;
});