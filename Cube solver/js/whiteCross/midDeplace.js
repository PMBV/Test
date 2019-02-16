function midDeplace() {

	if(cube[1][3] == "white" || cube[2][7] == "white") {
		moveTraducer("L' U' L");
	}
	
	if(cube[1][5] == "white" || cube[4][7] == "white") {
		moveTraducer("R U R'")
	}
	
	if(cube[4][1] == "white" || [5][5] == "white") {
		moveTraducer("B' U B")
	}
	
	if(cube[5][3] == "white" || cube[2][1] == "white") {
		moveTraducer("B U' B")
	}
}