function scrambler() {
	final = ""
	possibilities = ["R", "R'", "R2", "L", "L'", "L2", "U", "U'", "U2"
					, "F", "F'", "F2", "D", "D'", "D2", "B", "B'", "B2"]

	for(var i = 0; i < 15; i++) {
		final += possibilities[Math.floor(Math.random() * 17)] + " "
	}

	document.getElementById('moveLine').value = final;

	return final;
}