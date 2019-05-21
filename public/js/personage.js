// personage, идущий по периметру экрана

function showAssistant () {
	var point = document.createElement('img')
	point.className = "personage"
	point.currentPosition = [1,0]
	point.currentDirection = "top"
	point.src = "images/personage.gif"
	point.style.transform = 'scale(1, 1)'
	document.querySelector (".wrap").appendChild(point)
	point.interval = setInterval ( movePoint, 50 )
	// _____
	function setPointPosition () {
		point.style.bottom = point.currentPosition [1] + 'px'
		point.style.right = point.currentPosition [0] + 'px'
	}
	// ==============================  function movePoint
	function movePoint () {
		var x = point.currentPosition [0]
		var y = point.currentPosition [1]
		var dir = point.currentDirection
		var w = window.innerWidth - 140
		var h = window.innerHeight - 150
		var dx = 0
		var dy = 0
		switch ( point.currentDirection ) {
			case "right":
			dx = ( x < w ) ? 5 : 0
			dy = ( x < w ) ? 0 : 5
			dir = ( x < w )? dir : "left"
			// point.style.transform = 'scale(-1, 1)'
			break
			case "bottom":
				dx = ( y < h ) ? 0 : -5
				dy = ( y < h ) ? 5 : 0
				dir = ( y < h )? dir : "right"
				point.style.transform = 'scale(-1, 1)'
				break
			case "left":
				dx = ( x > 0 ) ? -5 : 0
				dy = ( x > 0 ) ? 0 : -5
				dir = ( x > 0 )? dir : "right"
				point.style.transform = 'scale(-1, 1)'
				break
			case "top":
				dx = ( y > 0 ) ? 0 : 5
				dy = ( y > 0 ) ? -5 : 0
				dir = ( y > 0 )? dir : "right"
				break
			default:
				break
		}
				point.currentDirection = dir
				point.currentPosition [0] += dx
				point.currentPosition [1] += dy
				setPointPosition ()
	}
}