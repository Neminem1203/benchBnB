import React from "react";
class BenchMap extends React.Component{
  componentDidMount(){
    const defaultCoord = this.props.coords;
    if(defaultCoord){
      debugger
      const mapOptions ={
        center: {lat: defaultCoord[0], lng: defaultCoord[1]},
        zoom: 20
      };
      this.map = new google.maps.Map(this.mapNode, mapOptions);
    }
  }
  render(){
    return(<div id="map-container" ref={ map => this.mapNode = map }/>)
  }
}

export default BenchMap;