var Piece = require('./Piece.js');

function Queen(color){
	this.color = color;

	this.name = 'Queen';
	this.id = 'Q';
	this.maxScope = 7;
	this.offsets = [
		[1, 1], [1, 0], [1, -1],
		[0, 1], [0, 0], [0, -1],
		[-1, 1], [-1, 0], [-1, -1]
	];
}

Queen.prototype.getOffsets = function(piece, states){
	return this.offsets;
}

module.exports = Queen;