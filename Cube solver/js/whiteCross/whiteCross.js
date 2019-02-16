function whiteCross() {

	i=0;
	downPlacing();

	while(cube[3][1] != "white" || cube[3][5] != "white" || cube[3][7] != "white" || cube[3][3] != "white") {
		


		uppedUppingPlacing();

		midDeplace();

		turnBadUpPlace();

		uppedUppingPlacing();

		console.log("pass")
		i++;
		if(i > 5) {
			moveTraducer(scrambler());
			i = 0;
		}
	}
	
	forcingFinalReturn();

	forcingFinalIntervert();


	actuColor();
}

//buggs détectés :

// lorsqu'une arrête est inversée dans son bon emplacement elle 
// n'arrive pas à se retourner toute seule

//encore le problème des arrêtes bien orientées sur la face 
//blanche mais pas dans leurs emplacements
