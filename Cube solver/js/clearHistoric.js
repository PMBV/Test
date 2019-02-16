function clearHistoric() {
	document.getElementById('historic').innerHTML = "";
	actuHistoric();
}

function actuHistoric() {
	numberOfMove = document.getElementById('historic').innerHTML.split(" ").length-1;
	document.getElementById('clearButton').innerHTML = "[" + numberOfMove + "][X]";
}