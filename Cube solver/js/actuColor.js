color = ["yellow", "red", "blue", "white", "green", "orange"]

function actuColor(face=0, place=0) {
	for(var i = 0; i < 6; i++) {

		for(var j = 0; j < 9; j++) {

			placeToPlace = document.getElementById(color[i] + j);

			placeToPlace.style.backgroundColor = cube[i][j];
		}
	}
}

