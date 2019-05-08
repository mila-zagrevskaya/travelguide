function clearBlock () {
	let cont = document.getElementById ("main")
	let container = cont.removeChild(document.querySelector (".description"))
	let map = cont.removeChild (document.querySelector (".section"))
}


let makeChoise = document.querySelector(".btn").addEventListener (
	'click', function (event){
		clearBlock ()
		class ChoiseRoute extends HTMLElement {
			constructor () {
				super ()
				let wrapper = document.createElement ( 'div' )
		        wrapper.className = "wrapper"
		        this.picture = document.createElement ( 'img' )
		        this.setPicture ( "https://images.pexels.com/photos/33044/sunflower-sun-summer-yellow.jpg" )
		        wrapper.appendChild ( this.picture )
		        this.picture.angle = 0
		        this.button = document.createElement ( 'button' )
		        this.button.innerText = 'ROTATE'
		        this.button.onclick = this.rotatePicture.bind ( this )
		        wrapper.appendChild ( this.button )

		        let style = document.createElement ( 'style' )
		        style.textContent = `
					}
				}


	}
)

