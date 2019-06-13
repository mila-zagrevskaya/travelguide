let myMap;
let markerArray = []
let cityContainer = document.querySelector (".city-container")
let cityArr = []
let marker
 let InfoWindow
function initMap() {
  	let container =  document.getElementById('mymap')
  	let options = {
      	mapTypeId: 'roadmap',
      	center: {lat: 49.8610945, lng: 33.7901306},
      	zoom: 7
  	}
  	myMap = new google.maps.Map(container, options);
} 

function clearBlock (container) {
 	container.style.display = "none"
 	container.style.transition = "all 0.5s"
}

function getReadyContainer  (event){
	clearBlock  (document.querySelector (".recital"))
	clearBlock (document.querySelector (".slider"))
}

function searchCity (event) {
	cityContainer.remove()
	cityContainer = document.createElement("div")
	cityContainer.className = "city-container"
	// cityContainer.style.opacity = "1"
	document.querySelector (".description").style.opacity = "1"
	document.querySelector (".description").appendChild ( cityContainer )
	cityArr = []

	var val = this.event.target.value
	fetch ('../db/db.json/cities') //'http://localhost:3000/cities'
		.then (response => response.json ()
			.then (
				dataObj => {
					for (let item in dataObj) { //объект с массивами обьектов
						val == item ? cityArr.push(dataObj[item])  : null
					}
					initMap()
					document.querySelector (".map-container").style.display = "block"
					document.getElementById ("mymap").style = `
										display: block;
										min-height: 500px;
									`
					function addMarker (properties) {
						marker = new google.maps.Marker ({
							map: myMap,
							position: properties.coordinates,
							info: properties.info
						})
						InfoWindow = new google.maps.InfoWindow ({
							content: properties.info ,
							maxWidth: 200
						})
						marker.addListener ('click', function (event){
							InfoWindow.open(myMap, marker)
						})
					}
				let element
				cityArr[0].forEach(
					function(item, index){
						element = document.querySelector (".city-container").appendChild(
							document.createElement("choise-way"))
						element.setAttribute ("coordinates", JSON.stringify(item.coordinates))
						element.setAttribute ("name", item.name);
						element.setAttribute ("adress", item.adress)
						element.setAttribute ("info", item.info)
						element.setAttribute ("image", item.image)
						element.shadow.querySelector ("input").setAttribute ("id", `input${index}`);
						element.shadow.querySelector ("label").setAttribute ("for", `input${index}`);
						element.shadow.querySelector ("input")
							.addEventListener ( 'change', function ( event ) {
								addMarker (item)
							})
				})
			})
		)
	getReadyContainer ()
}


// ____________
const template = document.querySelector (".city-container").appendChild (
    document.createElement ( "template" )
)
template.innerHTML = ` 
        <style>
         	.container,
			.place-info,
			.place-photo {
			    width: calc(90% - 5px);
			    vertical-align: central;
			    color: #fff;
			    font-weight: bold;
			    font-size: 1em;
			    line-height: 1em;
			    border: 1px solid #492f30;
			    border-radius: 3px;
			    background-color: #c8c4be;
			    padding: 5px 10px;
			    margin: 0px auto;
			}
			.place-container {
			    display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: stretch; 
				margin: 10px 0;
				padding: 15px 1px;
			    border-bottom: 1px solid #492f30;
			 }
			.info-wrap {
			    display: flex;
			    flex-direction: row;
			 }
			.place-info {
				width: calc(80% - 5px);
				display: flex;
				flex-direction: row;
				background-size: cover;
			    background-image: url(images/back_1.jpg);
			}
			.place {
				width: 100%;
			  	background-color:  #492f30;
			  	padding: 5px 10px;
			  	opacity: 0.6;
			}
			.place-photo {
				width: calc(30% - 5px);
				margin-left: 5px;
				background-size: cover;
				padding: 0;
				background-color: #492f30;
			} 
			.place-photo img {
			    width: 100%;
			    max-height: 400px;
			    line-height: 0;
			    vertical-align: middle;
			}
			.info-title {
			    border-bottom: 1px solid #a7b3af;
			}
			h5 {
			    margin: 0;
			    font-size: 1em;
			}
			.info-title span {
			    font-size: 12px;
			}
			.place-info p {
			    font-size: 14px;
			    font-weight: 400;
			}
			input[type = "checkbox"] {
			    display: none;
			}
			label {
			    padding-left: 20px;
			}
			label::before {
			    content: "";
			    position: relative;
			    top: 40%;
			    display: inline-block;
			    width: 20px;
			    height: 20px;
			    background-color: #a7b3af;
			    border: 1px solid #492f30;
			    border-radius: 3px;
			    vertical-align: middle;
			    margin-left: -10px;
			    margin-right: 10px;
			    padding: 1px;
			}
			input[type = "checkbox"]:checked + label::before {
			    content: "";
			    color: #492f30;
			    text-align: center;
			    font-size: 18px;
			    font-weight: bold;
			    background-image:  url("images/check-icon.png");
			    background-size: contain; 
			}


			@media (max-width: 768px) {
			    .container,
			    .place-info,
			    .place-photo{ 
			        margin: 0 auto;
			    }
			    .info-wrap {
				    flex-direction: column;
			 	    width: 100% ;
			    }
			    .place-info,
			    .place-photo {
			        width: calc(95% - 5px);
			        padding: 5px 10px;
			    }
			    .place-photo img {
			        width: 100%;
			        max-height: 250px;
			        line-height: 0;
			    }
			    label::before {
			    	margin-left: -25px;
			    margin-right: 5px;
			    }
			}
		</style>
		<div class="place-container ">
			<input type="checkbox" id="" name="place-check" >
			<label for="">  </label>
			<div class="info-wrap">
				<div class="place-info">
					<div class="place">
						<div class = "info-title"> 
							<h5 class = "name"></h5>
							<span class = "adress"></span>
						</div>
						<p class ="info"></p>
					</div>
				</div>
				<div class="place-photo">
					<img class = "image" src = "" alt="" />
				</div>
			</div>
		</div>
	`

class ChoiseWay extends HTMLElement {
    constructor() {
    	super()
     	this.shadow = this.attachShadow({ mode: 'open' })
        this.shadow.appendChild( template.content.cloneNode(true) )
        this.coordinates = {}
  	}

 	connectedCallBack() { }

	static get observedAttributes() {
	   return ["coordinates", "name", "adress", "info", "image"]
	}
	attributeChangedCallback( attrName, oldVal, newVal ) {
	   	attrName === 'coordinates' ? this.coordinates = JSON.parse (newVal) : null
	    attrName === 'name' ? this.shadow.querySelector (".name").innerText = newVal : null
	   	attrName === 'adress' ? this.shadow.querySelector (".adress").innerText = newVal : null
		attrName === 'info' ? this.shadow.querySelector (".info").innerText = newVal : null
		attrName === 'image' ? this.shadow.querySelector (".image").src = newVal : null
	} 
}

customElements.define( 'choise-way', ChoiseWay )

// __________________
