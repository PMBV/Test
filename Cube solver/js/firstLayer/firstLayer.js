function firstLayer() {
	
	while (cube[3][6] != "white" || cube[3][8] != "white" || cube[3][2] != "white" || cube[3][0] != "white") {

		upper();
		lefter();
		righter();

		ejectToReplace();

		console.log("firstL")
	}
}