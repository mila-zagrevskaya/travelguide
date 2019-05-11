let description = document.querySelector (".description")
let section = document.querySelector (".section")
let slider = document.querySelector (".slider")
let recital = document.querySelector (".recital")
let logo = document.querySelector (".logotype")


function pageUp() {
    window.scrollBy(0,-40);
    window.pageYOffset > 0 ? requestAnimationFrame(pageUp) :null
}
document.querySelector('.logo').addEventListener('click', function(event) {
    event.preventDefault();
    pageUp();
})



function clearBlock (container) {
 	// while ( container.firstChild) {
	    // container.removeChild( container.firstChild);
	    container.style.display = "none"

	// }
}
function changeContent (container) {
	container.textContent = ""
}


let makeChoise = document.querySelectorAll(".choise-route").forEach( 
	function (item) {
		item.addEventListener ( 'click', 
			function (event){
				clearBlock  (recital)
				clearBlock (slider)
			}
		)
	}
)	


logo.addEventListener ('click', function (event){
	recital.style.display = "block"
	slider.style.display = "block"
})