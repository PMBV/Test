function turnBadUpPlace() {
	
	associate = ""
		
	for(var i = 0; i < 4; i++) {
	
		badTopper = [			
	
				cube[5][1],
				cube[4][7],
				cube[1][7],
				cube[2][7]
	
		]
		
		if (badTopper[i] == "white") {
			////observation de la couleur associée à l'arrête blanche

	 		if (i == 0) {	
	 			associate = cube[0][7];

	 		}

	 		else if (i == 1) {
	 			associate = cube[0][5];
	 		}

	 		else if (i == 2) {
	 			associate = cube[0][1];
	 		}

	 		else if (i == 3) {
	 			associate = cube[0][3];
	 		}

	 		///// réglage de la position en fonction de la couleur associée et de la position de l'arrête

	 		if (associate == "blue") {

	 			if (i == 0) {
	 				moveTraducer("U'");
	 			}

	 			else if (i == 1) {
	 				moveTraducer("U2");
	 			}

	 			else if (i == 2) {
	 				moveTraducer("U");
	 			}

	 			else if (i == 3) {
	 			}

	 			moveTraducer("U' F' L F")
	 		}

	 		else if (associate == "red") {
	 			
	 			if (i == 0) {
	 				moveTraducer("U2");
	 			}

	 			else if (i == 1) {
	 				moveTraducer("U");
	 			}

	 			else if (i == 2) {
	 			}

	 			else if (i == 3) {
	 				moveTraducer("U'");
	 			}

	 			moveTraducer("U' R' F R")
	 		}
	 		
	 		else if (associate == "green") {

	 			if (i == 0) {
	 				moveTraducer("U");
	 			}

	 			else if (i == 1) {
	 			}

	 			else if (i == 2) {
	 				moveTraducer("U'");
	 			}

	 			else if (i == 3) {
	 				moveTraducer("U2");
	 			}

	 			moveTraducer("U F R' F'")
	 		}
	 		
	 		else if (associate == "orange") {

	 			if (i == 0) {
	 			}

	 			else if (i == 1) {
	 				moveTraducer("U'");
	 			}

	 			else if (i == 2) {
	 				moveTraducer("U2");
	 			}

	 			else if (i == 3) {
	 				moveTraducer("U");
	 			}

	 			moveTraducer("U R B' R'")
	 		}
		}
	}
}