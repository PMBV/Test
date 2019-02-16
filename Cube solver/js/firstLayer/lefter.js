function lefter() {

	/// pour toutes les arrêtes du côté gauche en commençant 
	/// par la face rouge

	for(var i = 0; i < 4; i++) {

	lefterList = [
		cube[1][6],
		cube[2][0],
		cube[5][2],
		cube[4][8]
		]

		if(lefterList[i] == "white") {
			
			if(i == 0) {

				if(cube[0][0] == "green") {

					moveTraducer("U2 F' U F")
				}

				if(cube[0][0] == "red") {

					moveTraducer("U' L' U L")
				}

				if(cube[0][0] == "blue") {

					moveTraducer("B' U B")
				}

				if(cube[0][0] == "orange") {

					moveTraducer("U R' U R")
				}
			}

			if(i == 1) {

				if(cube[0][6] == "green") {

					moveTraducer("U F' U F")
				}

				if(cube[0][6] == "red") {

					moveTraducer("U2 L' U L")
				}

				if(cube[0][6] == "blue") {

					moveTraducer("U' B' U B")
				}

				if(cube[0][6] == "orange") {

					moveTraducer("R' U R")
				}
			}

			if(i == 2) {

				if(cube[0][8] == "green") {

					moveTraducer("F' U F")
				}

				if(cube[0][8] == "red") {

					moveTraducer("U L' U L")
				}

				if(cube[0][8] == "blue") {

					moveTraducer("U2 B' U B")
				}

				if(cube[0][8] == "orange") {

					moveTraducer("U' R' U R")
				}

			}

			if(i == 3) {

				if(cube[0][2] == "green") {

					moveTraducer("U' F' U F")
				}

				if(cube[0][2] == "red") {

					moveTraducer("L' U L")
				}

				if(cube[0][2] == "blue") {

					moveTraducer("U B' U B")
				}

				if(cube[0][2] == "orange") {

					moveTraducer("U2 R' U R")
				}

			}
		}
	}
}