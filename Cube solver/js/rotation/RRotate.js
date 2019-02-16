function RRotate() {

/////////////////////////////////////////borders//////////////////

	borderW = 	[
					document.getElementById('white2').style.backgroundColor, 
					document.getElementById('white5').style.backgroundColor, 
					document.getElementById('white8').style.backgroundColor

					]
	borderR = 	[
					document.getElementById('red2').style.backgroundColor, 
					document.getElementById('red5').style.backgroundColor, 
					document.getElementById('red8').style.backgroundColor

					]
	borderY = 	[
					document.getElementById('yellow2').style.backgroundColor, 
					document.getElementById('yellow5').style.backgroundColor, 
					document.getElementById('yellow8').style.backgroundColor

					]
	borderO = 	[
					document.getElementById('orange2').style.backgroundColor, 
					document.getElementById('orange5').style.backgroundColor, 
					document.getElementById('orange8').style.backgroundColor

					]

	cube[3][2] = borderO[0]
	cube[3][5] = borderO[1]
	cube[3][8] = borderO[2]

	cube[1][2] = borderW[0]
	cube[1][5] = borderW[1]
	cube[1][8] = borderW[2]

	cube[0][2] = borderR[0]
	cube[0][5] = borderR[1]
	cube[0][8] = borderR[2]

	cube[5][2] = borderY[0]
	cube[5][5] = borderY[1]
	cube[5][8] = borderY[2]


	///////////////////////////////////face verte////////////

	arret = [
			document.getElementById('green3').style.backgroundColor,
			document.getElementById('green7').style.backgroundColor,
			document.getElementById('green5').style.backgroundColor,
			document.getElementById('green1').style.backgroundColor

			]

	cube[4][7] = arret[0]
	cube[4][5] = arret[1]
	cube[4][1] = arret[2]
	cube[4][3] = arret[3]

	coin = [
			document.getElementById('green0').style.backgroundColor,
			document.getElementById('green6').style.backgroundColor,
			document.getElementById('green8').style.backgroundColor,
			document.getElementById('green2').style.backgroundColor			

			]

	cube[4][6] = coin[0]
	cube[4][8] = coin[1]
	cube[4][2] = coin[2]
	cube[4][0] = coin[3]

	
	/////

	actuColor();
}
