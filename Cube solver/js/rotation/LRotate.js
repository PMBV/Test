function LRotate() {

/////////////////////////////////////////borders//////////////////

	borderW = 	[
					document.getElementById('white0').style.backgroundColor, 
					document.getElementById('white3').style.backgroundColor, 
					document.getElementById('white6').style.backgroundColor

					]
	borderR = 	[
					document.getElementById('red0').style.backgroundColor, 
					document.getElementById('red3').style.backgroundColor, 
					document.getElementById('red6').style.backgroundColor

					]
	borderY = 	[
					document.getElementById('yellow0').style.backgroundColor, 
					document.getElementById('yellow3').style.backgroundColor, 
					document.getElementById('yellow6').style.backgroundColor

					]
	borderO = 	[
					document.getElementById('orange0').style.backgroundColor, 
					document.getElementById('orange3').style.backgroundColor, 
					document.getElementById('orange6').style.backgroundColor

					]

	cube[3][0] = borderR[0]
	cube[3][3] = borderR[1]
	cube[3][6] = borderR[2]

	cube[1][0] = borderY[0]
	cube[1][3] = borderY[1]
	cube[1][6] = borderY[2]

	cube[0][0] = borderO[0]
	cube[0][3] = borderO[1]
	cube[0][6] = borderO[2]

	cube[5][0] = borderW[0]
	cube[5][3] = borderW[1]
	cube[5][6] = borderW[2]


	///////////////////////////////////face verte////////////

	arret = [
			document.getElementById('blue3').style.backgroundColor,
			document.getElementById('blue7').style.backgroundColor,
			document.getElementById('blue5').style.backgroundColor,
			document.getElementById('blue1').style.backgroundColor

			]

	cube[2][7] = arret[0]
	cube[2][5] = arret[1]
	cube[2][1] = arret[2]
	cube[2][3] = arret[3]

	coin = [
			document.getElementById('blue0').style.backgroundColor,
			document.getElementById('blue6').style.backgroundColor,
			document.getElementById('blue8').style.backgroundColor,
			document.getElementById('blue2').style.backgroundColor			

			]

	cube[2][6] = coin[0]
	cube[2][8] = coin[1]
	cube[2][2] = coin[2]
	cube[2][0] = coin[3]

	
	/////

	actuColor();
}
