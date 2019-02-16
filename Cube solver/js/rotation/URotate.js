function URotate() {

/////////////////////////////////////////borders//////////////////

	borderB = 	[
					document.getElementById('blue0').style.backgroundColor, 
					document.getElementById('blue3').style.backgroundColor, 
					document.getElementById('blue6').style.backgroundColor

					]
	borderR = 	[
					document.getElementById('red6').style.backgroundColor, 
					document.getElementById('red7').style.backgroundColor, 
					document.getElementById('red8').style.backgroundColor

					]
	borderG = 	[
					document.getElementById('green8').style.backgroundColor, 
					document.getElementById('green5').style.backgroundColor, 
					document.getElementById('green2').style.backgroundColor

					]
	borderO = 	[
					document.getElementById('orange2').style.backgroundColor, 
					document.getElementById('orange1').style.backgroundColor, 
					document.getElementById('orange0').style.backgroundColor

					]

	cube[2][0] = borderR[0]
	cube[2][3] = borderR[1]
	cube[2][6] = borderR[2]

	cube[1][6] = borderG[0]
	cube[1][7] = borderG[1]
	cube[1][8] = borderG[2]

	cube[4][8] = borderO[0]
	cube[4][5] = borderO[1]
	cube[4][2] = borderO[2]

	cube[5][2] = borderB[0]
	cube[5][1] = borderB[1]
	cube[5][0] = borderB[2]


	///////////////////////////////////face verte////////////

	arret = [
			document.getElementById('yellow3').style.backgroundColor,
			document.getElementById('yellow7').style.backgroundColor,
			document.getElementById('yellow5').style.backgroundColor,
			document.getElementById('yellow1').style.backgroundColor

			]

	cube[0][7] = arret[0]
	cube[0][5] = arret[1]
	cube[0][1] = arret[2]
	cube[0][3] = arret[3]

	coin = [
			document.getElementById('yellow0').style.backgroundColor,
			document.getElementById('yellow6').style.backgroundColor,
			document.getElementById('yellow8').style.backgroundColor,
			document.getElementById('yellow2').style.backgroundColor			

			]

	cube[0][6] = coin[0]
	cube[0][8] = coin[1]
	cube[0][2] = coin[2]
	cube[0][0] = coin[3]

	
	

	actuColor();
}