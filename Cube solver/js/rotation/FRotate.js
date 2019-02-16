function FRotate() {

/////////////////////////////////////////borders//////////////////

	borderY = 	[
					document.getElementById('yellow0').style.backgroundColor, 
					document.getElementById('yellow1').style.backgroundColor, 
					document.getElementById('yellow2').style.backgroundColor

					]
	borderG = 	[
					document.getElementById('green8').style.backgroundColor, 
					document.getElementById('green7').style.backgroundColor, 
					document.getElementById('green6').style.backgroundColor

					]
	borderW = 	[
					document.getElementById('white8').style.backgroundColor, 
					document.getElementById('white7').style.backgroundColor, 
					document.getElementById('white6').style.backgroundColor

					]
	borderB = 	[
					document.getElementById('blue8').style.backgroundColor, 
					document.getElementById('blue7').style.backgroundColor, 
					document.getElementById('blue6').style.backgroundColor

					]

	cube[4][8] = borderY[0]
	cube[4][7] = borderY[1]
	cube[4][6] = borderY[2]

	cube[3][8] = borderG[0]
	cube[3][7] = borderG[1]
	cube[3][6] = borderG[2]

	cube[2][8] = borderW[0]
	cube[2][7] = borderW[1]
	cube[2][6] = borderW[2]

	cube[0][0] = borderB[0]
	cube[0][1] = borderB[1]
	cube[0][2] = borderB[2]


	///////////////////////////////////////////////

	arret = [
			document.getElementById('red3').style.backgroundColor,
			document.getElementById('red7').style.backgroundColor,
			document.getElementById('red5').style.backgroundColor,
			document.getElementById('red1').style.backgroundColor

			]

	cube[1][7] = arret[0]
	cube[1][5] = arret[1]
	cube[1][1] = arret[2]
	cube[1][3] = arret[3]

	coin = [
			document.getElementById('red0').style.backgroundColor,
			document.getElementById('red6').style.backgroundColor,
			document.getElementById('red8').style.backgroundColor,
			document.getElementById('red2').style.backgroundColor			

			]

	cube[1][6] = coin[0]
	cube[1][8] = coin[1]
	cube[1][2] = coin[2]
	cube[1][0] = coin[3]

	
	

	actuColor();
}