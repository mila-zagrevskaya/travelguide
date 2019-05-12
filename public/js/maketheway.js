let description = document.querySelector (".description")
let section = document.querySelector (".section")
let slider = document.querySelector (".slider")
let recital = document.querySelector (".recital")
let logo = document.querySelector (".logotype")

function clearBlock (container) {
 	container.style.display = "none"
}


class ChoiseWay extends HTMLElement {
    constructor (){
        super ()
        this.shadow = this.attachShadow ( {mode: 'open'})
        this.content = this.innerText
        this.shadow.innerHTML = ` 
         <style>
           	.description,
			.plase-info,
			.plase-photo{
    			width: calc(90% - 5px);
    			vertical-align: center;
    			color: #fff;
    			font-weight: bold;
    			font-size: 1em;
    			line-height: 1em;
    			border: 1px solid #492f30;
    			border-radius: 3px;
    			background-color: #c8c4be;
    			padding: 5px 10px;
			}
			.plase-container {
  				display: flex;
				flex-direction: row;
				justify-content: space-around;
				align-items: stretch; 
				margin: 10px 0;
				padding: 15px 1px;
  				border-bottom: 1px solid #492f30;
 			}
			.plase-info {
				width: calc(70% - 5px);
				background-size: cover;
			  	background-image: url(http://gx.net.ua/news_images/1483543026.jpg)
			}
			.plase {
			  	background-color:  #492f30;
			  	padding: 5px 10px;
			  	opacity: 0.9;
			}
			.plase-photo {
 				width: calc(30% - 5px);
  				margin-left: 5px;
 				background-size: cover;
 				background-image: url(http://gx.net.ua/news_images/1483543026.jpg)
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
			.plase-info p {
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
			
			  content: "*";
			  color: #492f30;
			  text-align: center;
			  font-size: 18px;
			  font-weight: bold;
			}
		</style>
		<div class="plase-container ">
			<div>
				<input type="checkbox" id="plase-check" name="plase-check">
				<label for="plase-check">  </label>
			</div>
			<div class="plase-info">
				<div class="plase">
					<div class = "info-title"> 
						<h5></h5>
						<span></span>
					</div>
					<p></p>
				</div>
			</div>
			<div class="plase-photo"></div>
		</div>
    `

	    connectedCallBack() {
	    	this.shadow.querySelector('input[type="checkbox"]').addEventListener(
	    		'check', moreInfoButton)
        	

	    }

	    static get observedAttributes() {
	       return [ "name", 'adress', 'info', "image" ]
	    }
	    attributeChangedCallback( attrName, oldVal, newVal ) {
	      	attrName === 'name' ? this.shadow.querySelector ("h5").innerText = newVal : null
	       	attrName === 'adress' ? this.shadow.querySelector (".info-title span").innerText = newVal : null
	    	attrName === 'info' ? this.shadow.querySelector (".plase-info p").innerText = newVal : null
	    	attrName === 'image' ? this.shadow.querySelector (".plase-photo").innerText = newVal : null
	    } 
    
	}

}
customElements.define ("choise-way", ChoiseWay)






let makeChoise = document.querySelectorAll(".choise-route").forEach( 
	function (item) {
		item.addEventListener ( 'click', 
			function (event){
				clearBlock  (recital)
				clearBlock (slider)
				customElements.define ("choise-way", ChoiseWay)
			}
		)
	}
)	







//input[type = "checkbox"]:checked + label::before {
	  // content: "\2714";
//}