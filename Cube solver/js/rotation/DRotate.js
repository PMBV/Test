function DRotate() {

/////////////////////////////////////////borders//////////////////

	borderR = 	[
					document.getElementById('red0').style.backgroundColor, 
					document.getElementById('red1').style.backgroundColor, 
					document.getElementById('red2').style.backgroundColor

					]
	borderG = 	[
					document.getElementById('green6').style.backgroundColor, 
					document.getElementById('green3').style.backgroundColor, 
					document.getElementById('green0').style.backgroundColor

					]
	borderO = 	[
					document.getElementById('orange8').style.backgroundColor, 
					document.getElementById('orange7').style.backgroundColor, 
					document.getElementById('orange6').style.backgroundColor

					]
	borderB = 	[
					document.getElementById('blue2').style.backgroundColor, 
					document.getElementById('blue5').style.backgroundColor, 
					document.getElementById('blue8').style.backgroundColor

					]

	cube[4][6] = borderR[0]
	cube[4][3] = borderR[1]
	cube[4][0] = borderR[2]

	cube[5][8] = borderG[0]
	cube[5][7] = borderG[1]
	cube[5][6] = borderG[2]

	cube[2][2] = borderO[0]
	cube[2][5] = borderO[1]
	cube[2][8] = borderO[2]

	cube[1][0] = borderB[0]
	cube[1][1] = borderB[1]
	cube[1][2] = borderB[2]


	///////////////////////////////////////////////

	arret = [
			document.getElementById('white3').style.backgroundColor,
			document.getElementById('white7').style.backgroundColor,
			document.getElementById('white5').style.backgroundColor,
			document.getElementById('white1').style.backgroundColor

			]

	cube[3][7] = arret[0]
	cube[3][5] = arret[1]
	cube[3][1] = arret[2]
	cube[3][3] = arret[3]

	coin = [
			document.getElementById('white0').style.backgroundColor,
			document.getElementById('white6').style.backgroundColor,
			document.getElementById('white8').style.backgroundColor,
			document.getElementById('white2').style.backgroundColor			

			]

	cube[3][6] = coin[0]
	cube[3][8] = coin[1]
	cube[3][2] = coin[2]
	cube[3][0] = coin[3]

	
	

	actuColor();
}