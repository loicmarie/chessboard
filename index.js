var Chessboard = require('./lib/chessboard.js'),
	chessboard = new Chessboard();

console.log(chessboard.toString());
chessboard.play('e4');
chessboard.play('e5');
chessboard.play('d4');
chessboard.play('exd4');
console.log(chessboard.toString());

// chessboard.play({
// 	piece: "P",
// 	column: 4,
// 	row: 2
// });

// console.log(chessboard.toString());
// chessboard.play({
// 	piece: "P",
// 	column: 4,
// 	row: 5
// });

// console.log(chessboard.toString());
// chessboard.play({
// 	piece: "B",
// 	column: 2,
// 	row: 3
// });

// console.log(chessboard.toString());
// chessboard.play({
// 	piece: "K",
// 	column: 4,
// 	row: 6
// });

// console.log(chessboard.toString());
// chessboard.play({
// 	piece: "N",
// 	column: 0,
// 	row: 2
// });

// console.log(chessboard.toString());
// chessboard.play({
// 	piece: "P",
// 	column: 0,
// 	row: 4
// });

// console.log(chessboard.toString());
// chessboard.play({
// 	piece: "Q",
// 	column: 4,
// 	row: 1
// });

// console.log(chessboard.toString());
// chessboard.play({
// 	piece: "P",
// 	column: 3,
// 	row: 4
// });

// console.log(chessboard.toString());
