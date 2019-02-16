function moveTraducer(moveLine) {
	historic = document.getElementById('historic').innerHTML;
	moveTable = moveLine.split(" ");
	line = true;

	if(line == true) {

		for(var i = 0; i < moveTable.length; i++) {

			if(moveTable[i] == "R") {
				RRotate();
				document.getElementById('historic').innerHTML += " R"
			}

			else if(moveTable[i] == "R'") {
				RpRotate();
				document.getElementById('historic').innerHTML += " R'"
			}

			else if(moveTable[i] == "R2") {
				R2Rotate();
				document.getElementById('historic').innerHTML += " R2"
			}

			else if(moveTable[i] == "L") {
				LRotate();
				document.getElementById('historic').innerHTML += " L"
			}

			else if(moveTable[i] == "L'") {
				LpRotate();
				document.getElementById('historic').innerHTML += " L'"
			}

			else if(moveTable[i] == "L2") {
				L2Rotate();
				document.getElementById('historic').innerHTML += " L2"
			}

			else if(moveTable[i] == "U") {
				URotate();
				document.getElementById('historic').innerHTML += " U"
			}

			else if(moveTable[i] == "U'") {
				UpRotate();
				document.getElementById('historic').innerHTML += " U'"
			}

			else if(moveTable[i] == "U2") {
				U2Rotate();
				document.getElementById('historic').innerHTML += " U2"
			}

			else if(moveTable[i] == "F") {
				FRotate();
				document.getElementById('historic').innerHTML += " F"
			}

			else if(moveTable[i] == "F'") {
				FpRotate();
				document.getElementById('historic').innerHTML += " F'"
			}

			else if(moveTable[i] == "F2") {
				F2Rotate();
				document.getElementById('historic').innerHTML += " F2"
			}

			else if(moveTable[i] == "D") {
				DRotate();
				document.getElementById('historic').innerHTML += " D"
			}

			else if(moveTable[i] == "D'") {
				DpRotate();
				document.getElementById('historic').innerHTML += " D'"
			}

			else if(moveTable[i] == "D2") {
				D2Rotate();
				document.getElementById('historic').innerHTML += " D2"
			}

			else if(moveTable[i] == "B") {
				BRotate();
				document.getElementById('historic').innerHTML += " B"
			}

			else if(moveTable[i] == "B'") {
				BpRotate();
				document.getElementById('historic').innerHTML += " B'"
			}

			else if(moveTable[i] == "B2") {
				B2Rotate();
				document.getElementById('historic').innerHTML += " B2"
			}

			actuColor();
		}
		actuHistoric();
	}
}