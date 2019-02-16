function ejectToReplace() {
	downerList = [
		cube[2][8],
		cube[1][0],
		
		cube[1][2],
		cube[4][6],
		
		cube[4][0],
		cube[5][8],
		
		cube[5][6],
		cube[2][2]
	]

	if(downerList[0] == "white" || downerList[1] == "white") {
		moveTraducer("L' U' L");
	}

	if(downerList[2] == "white" || downerList[3] == "white") {
		moveTraducer("R U R'");
	}

	if(downerList[4] == "white" || downerList[5] == "white") {
		moveTraducer("R' U' R");
	}

	if(downerList[6] == "white" || downerList[7] == "white") {
		moveTraducer("L U L'");
	}
}