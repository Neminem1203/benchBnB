import React from "react";
import Bench from "./bench_index_item";

class Benches extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchBenches({ northEast: { lat: 37.79971, lng: -122.39208 }, southWest: { lat: 37.77187, lng: -122.47791 } });
    // dispatch(fetchBenches({northEast:{lat:50,lng: 0}, southWest: {lat: 0, lng: -140}})) // use this in window to fetch all
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