import {RECEIVE_BENCHES, RECEIVE_BENCH} from "../actions/benches_actions";
import {merge} from "lodash";

export default (state={}, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_BENCHES:
      return action.benches;
    case RECEIVE_BENCH:
      const oldState = Object.assign({}, state);
      return merge({}, oldState, action.bench);
    default:
      return state;
  }
};