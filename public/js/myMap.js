let myMap;


let makeWay =  fetch ("../js/maketheway.js")
    .then (response => response.text ()
      .then (
        response => { 
          document.body.appendChild(
            document.createElement('script')).textContent = response 
        }
      )
    )







function initMap() {
  let container =  document.getElementById('mymap')
  let options = {
      mapTypeId: 'hybrid',
      center: {lat: 49.9967099, lng: 36.218107},
      zoom: 12
  }
  myMap = new google.maps.Map(container, options);
  
  
  
  
  // function addMarker (properties) {
  //   let marker = new google.maps.Marker ({
  //     map: myMap,
  //     position: properties.coordinates,
  //     info: properties.info
  //   })
  //   let InfoWindow = new google.maps.InfoWindow ({
  //     content: properties.info ,
  //     maxWidth: 200
  //   })

  //   marker.addListener ('click', function (event){
  //       InfoWindow.open(myMap, marker)
  //   })
  // }

  // markers.forEach (function (mark) {
  //   addMarker (mark)
  // })  


  // var flightPlanCoordinates = markers.map (function (mark) {
  //    return mark.coordinates
  // })


  // var flightPlanCoordinates = function (){
    
  // }

  // var flightPath = new google.maps.Polyline({
  //           path: flightPlanCoordinates,
  //           geodesic: true,
  //           strokeColor: '#FF0000',
  //           strokeOpacity: 1.0,
  //           strokeWeight: 2
  //         });

  // flightPath.setMap(myMap);




}










// let markers = [
//   {
//         "name": "Площадь Свободы",
//         "adress": "пл. Свободы",
//         "coordinates": {"lat": 50.005195, "lng": 36.2295846},
//         "image": "images/kharkov/ploshha-svobody.jpg",
//         "info": "Харьковская площадь Свободы является 12-й по величине на всей планете Земля, и 6-й - в Европе. Её территория занимает 11 гектаров."
//       },
//       {
//         "name": "ЦПКиО им. М. Горького",
//         "adress": "ул. Сумская, 81",
//         "coordinates": {"lat": 50.0163106, "lng": 36.246678},
//         "image": "images/kharkov/gorkiypark.jpg",
//         "info": "Главный и самый большой парк Харькова. Обладатель международной премии «Golden Pony Awards-2013» за современную концепцию и тематическое оформление"
//       },
//       {
//         "name": "ОСК «Металіст»",
//         "adress": "ул. Плехановская, 65",
//         "coordinates": {"lat": 49.9797947, "lng": 36.2591195},
//         "image": "images/kharkov/metalist.jpg",
//         "info": "«Металлист» — центральный стадион города Харьков. Стадион и кассовый павильон стадиона занесены в Реестр культурно-национального наследия Украины."
//       },
//       {
//         "name": "Площадь Конституции",
//         "adress": "пл. Конституции",
//         "coordinates": {"lat": 49.9910202, "lng": 36.2303915},
//         "image": "images/kharkov/ploschad_konstitucii.jpg",
//         "info": "Площадь Конституции – это самая древняя из площадей Харькова. Дата основания - 1659 год, с того времени до наших дней площадь сменила множество названий."
//       }
// ]