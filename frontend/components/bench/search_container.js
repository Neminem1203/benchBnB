import { connect } from "react-redux";
import Search from "./search";
import {fetchBenches} from "../../actions/benches_actions";

const mSTP = state =>{
  const first_key = Object.keys(state.entities.benches)[0];
  const firstBench = state.entities.benches[first_key];
  let defaultCoord = undefined;
  if(firstBench){
    defaultCoord = [firstBench.lat, firstBench.lng];
  }
  return{
    benches: state.entities.benches,
    coords: defaultCoord
  };
};

const mDTP = dispatch =>{
  return{
    fetchBenches: ()=> dispatch(fetchBenches())
  };
};

export default connect(mSTP, mDTP)(Search);