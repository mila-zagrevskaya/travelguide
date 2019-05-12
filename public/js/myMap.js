let myMap;
function initMap() {
  let container =  document.getElementById('mymap')
  let options = {
      mapTypeId: 'hybrid',
      center: {lat: 49.9967099, lng: 36.218107},
      zoom: 12
  }
  myMap = new google.maps.Map(container, options);
  
 

  let InfoWindow = new google.maps.InfoWindow ({
    content: `<p> Hello</p>`,
  })
  
  // marker.addListener ('click', function (event){
  //     InfoWindow.open(myMap, marker)
  // })



  
  // var flightPlanCoordinates = function (){
    
  // }

  var flightPath = new google.maps.Polyline({
            path: flightPlanCoordinates,
            geodesic: true,
            strokeColor: '#FF0000',
            strokeOpacity: 1.0,
            strokeWeight: 2
          });

  flightPath.setMap(map);


flightPlanCoordinates.forEach(function (item){
  function addMarker (properties){
    let marker = new google.maps.Marker ({
      position:  item,
      map: myMap
    })

  }
})






}



