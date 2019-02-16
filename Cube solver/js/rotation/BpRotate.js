function BpRotate() {
		
/////////////////////////////////////////borders//////////////////

	borderW = 	[
					document.getElementById('white0').style.backgroundColor, 
					document.getElementById('white1').style.backgroundColor, 
					document.getElementById('white2').style.backgroundColor

					]
	borderG = 	[ 
					document.getElementById('green0').style.backgroundColor, 
					document.getElementById('green1').style.backgroundColor, 
					document.getElementById('green2').style.backgroundColor

					]
	borderY = 	[
					document.getElementById('yellow8').style.backgroundColor, 
					document.getElementById('yellow7').style.backgroundColor, 
					document.getElementById('yellow6').style.backgroundColor

					]
	borderB = 	[
					document.getElementById('blue0').style.backgroundColor, 
					document.getElementById('blue1').style.backgroundColor, 
					document.getElementById('blue2').style.backgroundColor

					]

	cube[2][0] = borderY[0]
	cube[2][1] = borderY[1]
	cube[2][2] = borderY[2]

	cube[3][0] = borderB[0]
	cube[3][1] = borderB[1]
	cube[3][2] = borderB[2]

	cube[4][0] = borderW[0]
	cube[4][1] = borderW[1]
	cube[4][2] = borderW[2]

	cube[0][8] = borderG[0]
	cube[0][7] = borderG[1]
	cube[0][6] = borderG[2]


	///////////////////////////////////////////////

	arret = [
			document.getElementById('orange3').style.backgroundColor,
			document.getElementById('orange7').style.backgroundColor,
			document.getElementById('orange5').style.backgroundColor,
			document.getElementById('orange1').style.backgroundColor

			]

	cube[5][7] = arret[0]
	cube[5][5] = arret[1]
	cube[5][1] = arret[2]
	cube[5][3] = arret[3]

	coin = [
			document.getElementById('orange0').style.backgroundColor,
			document.getElementById('orange6').style.backgroundColor,
			document.getElementById('orange8').style.backgroundColor,
			document.getElementById('orange2').style.backgroundColor			

			]

	cube[5][6] = coin[0]
	cube[5][8] = coin[1]
	cube[5][2] = coin[2]
	cube[5][0] = coin[3]

	
	

	actuColor();
}