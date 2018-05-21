function drawTree(h) {
  for (var i = 0; i < h; i++) {
    var star = '';
    for (var j = 0; j <= h - i; j++) {
      star += ' ';
    }
    for (var x = 0; x < i * 2 - 1; x++) {
      star += '*';
    }
    console.log(star);
  }
}

drawTree(prompt('How many rows a tree is to have?'));