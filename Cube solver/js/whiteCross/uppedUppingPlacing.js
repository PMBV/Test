 function uppedUppingPlacing() {

	associate = ""
		
	for(var i = 0; i < 4; i++) {

	topper = [			

			cube[0][7],
			cube[0][5],
			cube[0][1],
			cube[0][3]

	]

		
		if (topper[i] == "white") {
			////observation de la couleur associée à l'arrête blanche

	 		if (i == 0) {	
	 			associate = cube[5][1];

	 		}

	 		else if (i == 1) {
	 			associate = cube[4][5];
	 		}

	 		else if (i == 2) {
	 			associate = cube[1][7];
	 		}

	 		else if (i == 3) {
	 			associate = cube[2][3];
	 		}

	 		///// réglage de la position en fonction de la couleur associée et de la position de l'arrête

	 		if (associate == "blue") {

	 			if (i == 0) {
	 				moveTraducer("U' L2");
	 			}

	 			else if (i == 1) {
	 				moveTraducer("U2 L2");
	 			}

	 			else if (i == 2) {
	 				moveTraducer("U L2");
	 			}

	 			else if (i == 3) {
	 				moveTraducer("L2");
	 			}
	 		}

	 		else if (associate == "red") {
	 			
	 			if (i == 0) {
	 				moveTraducer("U2 F2");
	 			}

	 			else if (i == 1) {
	 				moveTraducer("U F2");
	 			}

	 			else if (i == 2) {
	 				moveTraducer("F2");
	 			}

	 			else if (i == 3) {
	 				moveTraducer("U' F2");
	 			}
	 		}
	 		
	 		else if (associate == "green") {

	 			if (i == 0) {
	 				moveTraducer("U R2");
	 			}

	 			else if (i == 1) {
	 				moveTraducer("R2");
	 			}

	 			else if (i == 2) {
	 				moveTraducer("U' R2");
	 			}

	 			else if (i == 3) {
	 				moveTraducer("U2 R2");
	 			}
	 		}
	 		
	 		else if (associate == "orange") {

	 			if (i == 0) {
	 				moveTraducer("B2");
	 			}

	 			else if (i == 1) {
	 				moveTraducer("U' B2");
	 			}

	 			else if (i == 2) {
	 				moveTraducer("U2 B2");
	 			}

	 			else if (i == 3) {
	 				moveTraducer("U B2");
	 			}
	 		}
		}
	}
 }