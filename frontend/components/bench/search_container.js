import { connect } from "react-redux";
import Search from "./search";
import {fetchBenches} from "../../actions/benches_actions";
import {updateBounds} from "../../actions/filter_actions";

const mSTP = state =>{
  // const first_key = Object.keys(state.entities.benches)[0];
  // const firstBench = state.entities.benches[first_key];
  // let defaultCoord = undefined;
  // if(firstBench){
  //   defaultCoord = [firstBench.lat, firstBench.lng];
  // }
  return{
    benches: state.entities.benches,
    bounds: state.ui.filter.bounds
  };
};

const mDTP = dispatch =>{
  return{
    fetchBenches: (bound) => dispatch(fetchBenches(bound)),
    updateBounds: (bound) => dispatch(updateBounds(bound))
  };
};

export default connect(mSTP, mDTP)(Search);