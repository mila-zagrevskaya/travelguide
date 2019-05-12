

function clearBlock (container) {
 	container.style.display = "none"
 	container.style.transition = "all 0.5s"
}



const template = document.querySelector (".description").appendChild (
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
			    background-image: url(http://gx.net.ua/news_images/1483543026.jpg)
			}
			.place {
			  	background-color:  #492f30;
			  	padding: 5px 10px;
			  	opacity: 0.8;
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
			}
			.info-title {
			    border-bottom: 1px solid #a7b3af;
			}
			h5 {
			    margin: 0;
			}
			.info-title span {
			    font-size: 10px;
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
			    content: "+";
			    color: #492f30;
			    text-align: center;
			    font-size: 18px;
			    font-weight: bold;
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
			    .place-photo {
			        width: calc(80% - 5px);
			        padding: 5px 10px;
			    }
			    .place-photo img {
			        width: 100%;
			        max-height: 250px;
			        line-height: 0;
			    }
			}
		</style>
		<div class="place-container ">
			<input type="checkbox" id="" name="place-check">
			<label for="">  </label>
			<div class="info-wrap">
				<div class="place-info">
					<div class="place">
					<div class = "info-title"> 
						<h5></h5>
						<span></span>
					</div>
					<p></p>
					</div>
				</div>
				<div class="place-photo">
					<img src="" alt="" />
				</div>
			</div>
		</div>
			
    `


class ChoiseWay extends HTMLElement {
    constructor() {
      super()
      const shadowRoot = this.attachShadow({ mode: 'open' })
        .appendChild( template.content.cloneNode(true) )
  }
}

customElements.define( 's', ChoiseWay )




// class ChoiseWay extends HTMLElement {
//     constructor (){
//         super ()
//         this.shadow = this.attachShadow ( {mode: 'open'})
//         this.content = this.innerText
//         this.shadow.innerHTML = 

// 	    connectedCallBack() {
// 	    	this.shadow.querySelector('input[type="checkbox"]').addEventListener(
// 	    		'check', moreInfoButton)
        	
// 		}

// 	    static get observedAttributes() {
// 	       return [ "id", name", 'adress', 'info', "image" ]
// 	    }
// 	    attributeChangedCallback( attrName, oldVal, newVal ) {
//		    attrName === 'id' ? this.shadow.querySelector ("input[type = "checkbox"]").id = newVal : null
// 	      	attrName === 'name' ? this.shadow.querySelector ("h5").innerText = newVal : null
// 	       	attrName === 'adress' ? this.shadow.querySelector (".info-title span").innerText = newVal : null
// 	    	attrName === 'info' ? this.shadow.querySelector (".plase-info p").innerText = newVal : null
// 	    	attrName === 'image' ? this.shadow.querySelector (".plase-photo").innerText = newVal : null
// 	    } 
    
// 	}

// }
// customElements.define ("choise-way", ChoiseWay)

function createWay (){
	fetch ("http://localhost:3000/kharkov")
	.then (response => response.json (
		.then (
			json => json.forEach (
				container => 
					var choiseWay 
			)
		)
	))
}




let makeChoise = document.querySelectorAll(".choise-route").forEach( 
	function (item) {
		item.addEventListener ( 'click', 
			function (event){
				clearBlock  (document.querySelector (".recital"))
				clearBlock (document.querySelector (".slider"))
				// customElements.define ("choise-way", ChoiseWay)
			}
		)
	}
)	







//input[type = "checkbox"]:checked + label::before {
	  // content: "\2714";
//}