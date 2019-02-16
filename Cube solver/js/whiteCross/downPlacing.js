function downPlacing() {
	associate = ""
		
	for(var i = 0; i < 4; i++) {

	downer = [			

			cube[3][7],
			cube[3][5],
			cube[3][1],
			cube[3][3]

	]

		
		if (downer[i] == "white") {
			////observation de la couleur associée à l'arrête blanche

	 		if (i == 0) {	
	 			associate = cube[1][1];

	 		}

	 		else if (i == 1) {
	 			associate = cube[4][3];
	 		}

	 		else if (i == 2) {
	 			associate = cube[5][7];
	 		}

	 		else if (i == 3) {
	 			associate = cube[2][5];
	 		}

	 		///// réglage de la position en fonction de la couleur associée et de la position de l'arrête

	 		if (associate == "blue") {

	 			if (i == 0) {
	 				moveTraducer("D'");

	 			}

	 			else if (i == 1) {
	 				moveTraducer("D2");
	 			}

	 			else if (i == 2) {
	 				moveTraducer("D");
	 			}

	 			else if (i == 3) {

	 			}
	 		}

	 		else if (associate == "orange") {
	 			
	 			if (i == 0) {
	 				moveTraducer("D2");
	 			}

	 			else if (i == 1) {
	 				moveTraducer("D");
	 			}

	 			else if (i == 2) {
	 			}

	 			else if (i == 3) {
	 				moveTraducer("D'");
	 			}
	 		}
	 		
	 		else if (associate == "green") {

	 			if (i == 0) {
	 				moveTraducer("D");
	 			}

	 			else if (i == 1) {
	 			}

	 			else if (i == 2) {
	 				moveTraducer("D'");
	 			}

	 			else if (i == 3) {
	 				moveTraducer("D2");
	 			}
	 		}
	 		
	 		else if (associate == "red") {

	 			if (i == 0) {
	 			}

	 			else if (i == 1) {
	 				moveTraducer("D'");
	 			}

	 			else if (i == 2) {
	 				moveTraducer("D2");
	 			}

	 			else if (i == 3) {
	 				moveTraducer("D");
	 			}
	 		}
		}
	}
}