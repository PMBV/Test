function tabler(color, toInsert) {
	table = document.createElement('table');
	table.id = color;
	for(var i = 0; i < 3; i++) {
		line = document.createElement('tr');
		for(var j = 0; j < 3; j++) {
			cas = document.createElement('td');
			line.appendChild(cas);
			cas.id = color + ((i+1)*3 - (3-j));
			cas.style.backgroundColor = color;
			numeroting = document.createElement('p');
			numerotingContent = document.createTextNode((i+1)*3 - (3-j));

			numeroting.appendChild(numerotingContent);
			cas.appendChild(numeroting)
		}

		table.appendChild(line)
	}
	document.getElementById(toInsert).appendChild(table)
}

function disposeTables() {
	tabler("yellow", "big2");
	tabler("red", "big5");
	tabler("blue", "big7");
	tabler("white", "big8");
	tabler("green", "big9");
	tabler("orange", "big11");
}


//prochaine étape : connecter def.js aux carrées e couleur
