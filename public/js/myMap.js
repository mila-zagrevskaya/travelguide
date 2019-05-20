// // let myMap;
// let markerArray = []


// // let makeWay =  
// // fetch ("../js/maketheway.js")
// //     .then (response => response.text ()
// //       .then (
// //         response => { 
// //           document.body.appendChild(
// //             document.createElement('script')).textContent = response 
// //         }
// //       )
// //     )

// function initMap() {
//   // console.log (this.cityArr)
//   // let directionsService
//   // let directionsDisplay
//   let container =  document.getElementById('mymap')
//   let options = {
//       mapTypeId: 'hybrid',
//       center: {lat: 49.9967099, lng: 36.218107},
//       zoom: 12
//   }
//   myMap = new google.maps.Map(container, options);
    
//   function addMarker (properties) {
//     let marker = new google.maps.Marker ({
//       map: myMap,
//       position: properties.coordinates,
//       info: properties.info
//     })
//     let InfoWindow = new google.maps.InfoWindow ({
//       content: properties.info ,
//       maxWidth: 200
//     })

//     marker.addListener ('click', function (event){
//         InfoWindow.open(myMap, marker)
//     })
//   }

//   markers.forEach (function (mark) {
//     addMarker (mark)
//   })  


//     // прокладывает путь от А до Б
//   var directionsService = new google.maps.DirectionsService;
//   var directionsDisplay = new google.maps.DirectionsRenderer({map: myMap});
//     // Instantiate an info window to hold step text.
//   var stepDisplay = new google.maps.InfoWindow;
//     // Display the route between the initial start and end selections.
//   calculateAndDisplayRoute( directionsDisplay, directionsService, markerArray, stepDisplay, myMap);
//     // Listen to change events from the start and end lists.
//   var onChangeHandler = function() {
//     calculateAndDisplayRoute(
//       directionsDisplay, directionsService, markerArray, stepDisplay, myMap);
//   };
//   document.getElementById('start').addEventListener('change', onChangeHandler);
//   document.getElementById('end').addEventListener('change', onChangeHandler);
//           }

//   function calculateAndDisplayRoute(directionsDisplay, directionsService,
//     markerArray, stepDisplay, myMap) {
//     // First, remove any existing markers from the map.
//     for (var i = 0; i < markerArray.length; i++) {
//       markerArray[i].setMap(null);
//     }
//     // Retrieve the start and end locations and create a DirectionsRequest using
//         // WALKING directions.
//         directionsService.route({
//           origin: document.getElementById('start').value,
//           destination: document.getElementById('end').value,
//           travelMode: 'WALKING'
//         }, function(response, status) {
//           // Route the directions and pass the response to a function to create
//           // markers for each step.
//           if (status === 'OK') {
//             document.getElementById('warnings-panel').innerHTML =
//                 '<b>' + response.routes[0].warnings + '</b>';
//             directionsDisplay.setDirections(response);
//             showSteps(response, markerArray, stepDisplay, map);
//           } else {
//             window.alert('Directions request failed due to ' + status);
//           }
//         });
//   }
//        function showSteps(directionResult, markerArray, stepDisplay, map) {
//         // For each step, place a marker, and add the text to the marker's infowindow.
//         // Also attach the marker to an array so we can keep track of it and remove it
//         // when calculating new routes.
//         var myRoute = directionResult.routes[0].legs[0];
//         for (var i = 0; i < myRoute.steps.length; i++) {
//           var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
//           marker.setMap(map);
//           marker.setPosition(myRoute.steps[i].start_location);
//           attachInstructionText(
//               stepDisplay, marker, myRoute.steps[i].instructions, map);
//         }
//       }

//       function attachInstructionText(stepDisplay, marker, text, map) {
//         google.maps.event.addListener(marker, 'click', function() {
//           // Open an info window when the marker is clicked on, containing the text
//           // of the step.
//           stepDisplay.setContent(text);
//           stepDisplay.open(map, marker);
       

//         })

// }












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