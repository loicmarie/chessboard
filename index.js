var Chessboard = require('./lib/chessboard.js'),
	chessboard = new Chessboard();
	
chessboard.play('Pe3');
chessboard.play('pe6');
	
console.log(chessboard.get());

// chessboard.play('Bf3');

// console.log(chessboard.get());