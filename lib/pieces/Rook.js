var Piece = require('./Piece.js');

function Rook(color){
	this.color = color;

	this.name = 'Rook';
	this.id = 'R';
	this.maxScope = 7;
	this.offsets = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1]
	];
}

Rook.prototype.getOffsets = function(piece, states){
	return this.offsets;
}

module.exports = Rook;