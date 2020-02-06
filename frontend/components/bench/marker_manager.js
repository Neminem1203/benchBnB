export default class MarkerManager{
  constructor(map){
    this.map = map;
    this.markers = {};
  }
  updateMarkers(benches){
    const bench_ids = Object.values(benches);
    bench_ids.forEach(bench => {
      if(!this.markers[bench.id]){
        this.markers = Object.assign(this.markers, {[bench.id]: 
          new google.maps.Marker({
            position: {lat: bench.lat, lng: bench.lng},
            map: this.map,
            title: bench.description
          })});
      }});
  }

}