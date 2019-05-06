function pageUp() {
    window.scrollBy(0,-40);
    window.pageYOffset > 0 ? requestAnimationFrame(pageUp) :null
}
document.querySelector('.logo').addEventListener('click', function(event) {
    event.preventDefault();
    pageUp();
})

