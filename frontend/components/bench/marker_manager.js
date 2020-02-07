
function toggleBounce() {
  if (this.getAnimation() !== null) {
    this.setAnimation(null);
    this.setLabel(`${id}`);
  } else {
    this.setAnimation(google.maps.Animation.BOUNCE);
    this.setLabel("");
  }
}

export default class MarkerManager{
  constructor(map){
    this.map = map;
    this.markers = {};
  }
  updateMarkers(benches){
    const bench_ids = Object.values(benches);
    Object.keys(this.markers).forEach(id => {
      if (!Object.keys(benches).includes(id)) 
        {this.markers[id].setMap(null);delete this.markers[id];}
    })
    bench_ids.forEach(bench => {
        if(!this.markers[bench.id]){
        this.markers = Object.assign(this.markers, {[bench.id]: 
          new google.maps.Marker({
            position: {lat: bench.lat, lng: bench.lng},
            map: this.map,
            animation: google.maps.Animation.DROP,
            label: `${bench.id}`,
            title: bench.description
          })});
          this.markers[bench.id].addListener('click', toggleBounce)
        }
      });
  }

  //https://developers.google.com/maps/documentation/javascript/markers#animate
  // just for fun

  // toggleBounce(id) {
  //   const bench = this.markers[id];
  //   if (bench.getAnimation() !== null) {
  //     bench.setAnimation(null);
  //     bench.setLabel(`${id}`);
  //   } else {
  //     bench.setAnimation(google.maps.Animation.BOUNCE);
  //     bench.setLabel("");
  //   }
  // }

  // Everything before this is from Google Maps API Documentation
}