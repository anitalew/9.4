function drawTree(h) {
	for (var i = 0; i < h; i++) {
		var star = '';

		for (var j = 0; j < h - i; j++) {
			star += ' ';
		}

		for (var j = 0; j < i * 2 + 1; j++) {
			star += '*';
		}

		console.log(star);
	}
}

drawTree(prompt('How many rows a tree is to have?'));
