import React from "react";
import MarkerManager from "./marker_manager";

class BenchMap extends React.Component{
  componentDidMount(){
    const mapOptions ={
      center: { lat: 37.7697842, lng: -122.4700492},
      zoom: 12
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    this.MarkerManager = new MarkerManager(this.map);
  }
  render(){
    if(this.MarkerManager)
      {this.MarkerManager.updateMarkers(this.props.benches);}
    return(<div id="map-container" ref={ map => this.mapNode = map }/>)
  }
}

export default BenchMap;