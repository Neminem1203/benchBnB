import * as BenchAPIUtil from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";

export const fetchBenches = () => dispatch => {
  return BenchAPIUtil.fetchBenches().then(payload => dispatch(receiveAllBenches(payload)));
};

export const receiveAllBenches= (benches)=>{
  return{
    type: RECEIVE_BENCHES,
    benches
  };
};