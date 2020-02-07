import React from "react";
import {withRouter} from "react-router-dom";
import MarkerManager from "./marker_manager";

class BenchMap extends React.Component{
  componentDidMount(){
    const mapOptions ={
      center: { lat: 37.7697842, lng: -122.4700492},
      zoom: 13
    };
    this.map = new google.maps.Map(this.mapNode, mapOptions);
    
    this.map.addListener('idle', () => {
      // debugger
      const nE = this.map.getBounds().getNorthEast();
      const sW = this.map.getBounds().getSouthWest();
      const bounds = {northEast: {lat: nE.lat(),lng: nE.lng()}, southWest: {lat: sW.lat(), lng: sW.lng()}};
      this.props.updateBounds(bounds);
      this.MarkerManager.updateMarkers(this.props.benches);
    })
    this.map.addListener('click', (coords)=>{
      // debugger
      this.props.history.push({
        pathname: "benches/new",
        search: `lat=${coords.latLng.lat()}&lng=${coords.latLng.lng()}`
      });
    })

    this.MarkerManager = new MarkerManager(this.map);
  }
  render(){
    if(this.MarkerManager)
      {this.MarkerManager.updateMarkers(this.props.benches);}
    return(<div id="map-container" ref={ map => this.mapNode = map }/>)
  }
}

export default withRouter(BenchMap);