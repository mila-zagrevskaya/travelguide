function clearBlock () {
	let cont = document.getElementById ("main")
	let container = cont.removeChild(document.querySelector (".section"))
	let map = cont.removeChild (document.querySelector (".description"))
}


let makeChoise = document.querySelector(".btn").addEventListener (
	'click', function (event){
		clearBlock ()

	}
)

