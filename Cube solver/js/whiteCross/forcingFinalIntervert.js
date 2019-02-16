function forcingFinalIntervert() {

	if(cube[3][1] == "white" && cube[3][5] == "white"  && cube[3][7] == "white" && cube[3][3] == "white") {
		
		if(cube[1][1] == "orange" && cube[4][3] == "green" && cube[5][7] == "red" && cube[2][5] == "blue") {
			
		moveTraducer("D2");	
		}

		if(cube[1][1] == "red" && cube[4][3] == "blue" && cube[5][7] == "orange" &&  cube[2][5] == "green") {
			
		moveTraducer("R2 L2 U2 R2 L2");
		}
	}
}