import React from "react";

import BenchMap from "./bench_map";
import BenchIndex from "./bench_index";

const Search = (props) => {
  return(
    <div>
      <BenchMap coords={props.coords} benches={props.benches} bounds={props.bounds} updateBounds={props.updateBounds}/>
      <></>
      <BenchIndex benches={props.benches} fetchBenches={props.fetchBenches} bounds={props.bounds}/>
    </div>
  )
}

export default Search;