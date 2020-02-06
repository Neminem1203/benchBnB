import React from "react";
import Bench from "./bench_index_item";

class Benches extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBenches();
  }
  render(){
    // debugger
    const benches = Object.values(this.props.benches).map(bench => {
    return (<Bench key={bench.id} bench={bench}/>)});
    return (
    <ul>
      {benches}
    </ul>
    );
  }
}

export default Benches;