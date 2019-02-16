function placer() {
		fronterAndAsso = [
		cube[1][7],
		cube[0][1],
		
		cube[4][5],
		cube[0][5],

		cube[5][1],
		cube[0][7],

		cube[2][3],
		cube[0][3]
	]
//moveTraducer("U R U' R' U' F' U F")


	if(cube[1][7] != "yellow" || cube[0][1] != "yellow") {
		if(cube[1][7] == "green") {

			if(cube[0][1] == "orange") {

				moveTraducer("U'");

				moveTraducer("U B' U' B U' R' U R");
			}

			else if(cube[0][1] == "red") {

				moveTraducer("U'");

				moveTraducer("U' F' U F U R U' R'");
			}
		}

		else if(cube[1][7] == "orange") {

			if(cube[0][1] == "blue") {

				moveTraducer("U2");

				moveTraducer("U' R' U R U B U' B'");
			}

			else if(cube[0][1] == "green") {

				moveTraducer("U2");

				moveTraducer("U L U' L' U' B U B'");
			}
		}

		else if(cube[1][7] == "blue") {

			if(cube[0][1] == "orange") {

				moveTraducer("U");

				moveTraducer("U' F' U F U R U' R'");
			}

			else if(cube[0][1] == "red") {

				moveTraducer("U");

				moveTraducer("U F U' F' U' L' U L");
			}
		}

		else if(cube[1][7] == "red") {

			if(cube[0][1] == "blue") {

				moveTraducer("U' L' U L U F U' F'");
			}

			else if(cube[0][1] == "green") {

				moveTraducer("U R U' R' U' F' U F");
			}
		}
	}


}