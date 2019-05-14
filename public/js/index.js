var description = document.querySelector (".description")
let section = document.querySelector (".section")
var slider = document.querySelector (".slider")
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

function testUserText (userText) {
	return userText.split ("<").join ("&lt")
	console.log (userText)
}

logo.addEventListener ('click', function (event){
	recital.style.display = "block"
	slider.style.display = "block"
})





