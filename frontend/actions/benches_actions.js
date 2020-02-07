import * as BenchAPIUtil from "../util/bench_api_util";

import { Redirect } from "react-router-dom";
export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

export const fetchBenches = (filter) => dispatch => {
  return BenchAPIUtil.fetchBenches(filter).then(payload => dispatch(receiveAllBenches(payload)));
};

export const createBench = (bench) => dispatch => {
  return BenchAPIUtil.createBench(bench).then(payload => {
    dispatch(receiveBench(payload));
  });
}

export const receiveAllBenches= (benches)=>{
  return{
    type: RECEIVE_BENCHES,
    benches
  };
};

export const receiveBench = (bench) =>{{
  return{
    type: RECEIVE_BENCH,
    bench
  }
}}