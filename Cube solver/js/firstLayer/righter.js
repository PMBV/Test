function righter() {
		
	for(var i = 0; i < 4; i++) {

	righterList = [
		cube[1][8],
		cube[2][6],
		cube[5][0],
		cube[4][2]
	]

		if(righterList[i] == "white") {
			
			if(i == 0) {

				if(cube[0][2] == "green") {

					moveTraducer("B' U' B")
				}

				if(cube[0][2] == "red") {

					moveTraducer("U R U' R'")
				}

				if(cube[0][2] == "blue") {

					moveTraducer("U2 F U' F'")
				}

				if(cube[0][2] == "orange") {

					moveTraducer("U' L U' L'")
				}
			}

			if(i == 1) {

				if(cube[0][0] == "green") {

					moveTraducer("U' B' U' B")
				}

				if(cube[0][0] == "red") {

					moveTraducer("R U' R'")
				}

				if(cube[0][0] == "blue") {

					moveTraducer("U F U' F'")
				}

				if(cube[0][0] == "orange") {

					moveTraducer("U2 L U' L'")
				}
			}

			if(i == 2) {

				if(cube[0][6] == "green") {

					moveTraducer("U2 B' U' B")
				}

				if(cube[0][6] == "red") {

					moveTraducer("U' R U' R'")
				}

				if(cube[0][6] == "blue") {

					moveTraducer("F U' F'")
				}

				if(cube[0][6] == "orange") {

					moveTraducer("U L U' L'")
				}

			}

			if(i == 3) {

				if(cube[0][8] == "green") {

					moveTraducer("U B' U' B")
				}

				if(cube[0][8] == "red") {

					moveTraducer("U2 R U' R'")
				}

				if(cube[0][8] == "blue") {

					moveTraducer("U' F U' F'")
				}

				if(cube[0][8] == "orange") {

					moveTraducer("L U' L'")
				}

			}
		}
	}
}