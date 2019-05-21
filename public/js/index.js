const description = document.querySelector (".description")
let section = document.querySelector (".section")
let slider = document.querySelector (".slider")
let recital = document.querySelector (".recital")
let logo = document.querySelector (".logotype")

// скролл страницы наверх

function pageUp() {
    window.scrollBy(0,-40);
    window.pageYOffset > 0 ? requestAnimationFrame(pageUp) :null
}
document.querySelector('.up').addEventListener('click', function(event) {
    event.preventDefault();
    pageUp();
})

// вывести на страницу приветствие и убрать checkbox
logo.addEventListener ('click', function (event){
	recital.style.display = "block"
	slider.style.display = "block"
	cityContainer.textContent = ""
	document.querySelector (".map-container").style.display = "none"
})



