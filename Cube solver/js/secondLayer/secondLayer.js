function secondLayer() {

while(cube[1][3] != "red" || cube[1][5] != "red" || cube[4][7] != "green" || cube[4][1] != "green" || 
	cube[5][5] != "orange" || cube[5][3] != "orange" || cube[2][1] != "blue" || cube[2][7] != "blue") {
	
	placer();
	moveTraducer("U")
}

}