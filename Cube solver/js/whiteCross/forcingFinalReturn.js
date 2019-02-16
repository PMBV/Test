function forcingFinalReturn() {
	////////fonction permettant de retourner une arrête mal orientée dans son emplacement

	toReturn = [
		cube[1][1],
		cube[2][5],
		cube[5][7],
		cube[4][3]
	]

	if(cube[1][1] == "white") {
		moveTraducer("D2 B' D R");
		forcingFinalIntervert();
	}

	if(cube[2][5] == "white") {
		moveTraducer("D' B' D' R");
		forcingFinalIntervert();
	}

	if(cube[5][7] == "white") {
		moveTraducer("D B' D' R");
		forcingFinalIntervert();
	}

	if(cube[4][3] == "white") {
		moveTraducer("B' D' R");
		forcingFinalIntervert();
	}
}