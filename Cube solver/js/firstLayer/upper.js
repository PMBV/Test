function upper() {

	for(var i = 0; i < 4; i++) {
	
		upperList = [
			cube[0][0],
			cube[0][6],
			cube[0][8],
			cube[0][2]	
		]

		if(upperList[i] == "white") {
				
			if(i == 0) {
	
				if(cube[1][6] == "green") {
	
					moveTraducer("U2 R' U R")
				}
	
				if(cube[1][6] == "red") {
	
					moveTraducer("U' R U' R'")
				}
	
				if(cube[1][6] == "blue") {
	
					moveTraducer("L' U L")
				}
	
				if(cube[1][6] == "orange") {
	
					moveTraducer("U L U' L'")
				}
			}
			if(i == 1) {
	
				if(cube[2][0] == "green") {
	
					moveTraducer("U R' U R")
				}
	
				if(cube[2][0] == "red") {
	
					moveTraducer("U2 R U' R'")
				}
	
				if(cube[2][0] == "blue") {
	
					moveTraducer("U' L' U L")
				}
	
				if(cube[2][0] == "orange") {
	
					moveTraducer("L U' L'")
				}
			}
			if(i == 2) {
	
				if(cube[5][2] == "green") {
	
					moveTraducer("R' U R")
				}
	
				if(cube[5][2] == "red") {
	
					moveTraducer("U R U' R'")
				}
	
				if(cube[5][2] == "blue") {
	
					moveTraducer("U2 L' U L")
				}
	
				if(cube[5][2] == "orange") {
	
					moveTraducer("U' L U' L'")
				}
			}
	
			if(i == 3) {
	
				if(cube[4][8] == "green") {
	
					moveTraducer("U' R' U R")
				}
	
				if(cube[4][8] == "red") {
	
					moveTraducer("R U' R'")
				}
	
				if(cube[4][8] == "blue") {
	
					moveTraducer("U L' U L")
				}
	
				if(cube[4][8] == "orange") {
	
					moveTraducer("U2 L U' L'")
				}
			}
		}
	}
}