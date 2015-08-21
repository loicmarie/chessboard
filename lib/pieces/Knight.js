var Piece = require('./Piece.js');

function Knight(color){
	this.color = color;

	this.name = 'Knight';
	this.id = 'N';
	this.maxScope = 1;
	this.offsets = [
		[-2, -1], [-2, 1],
		[-1, -2], [-1, 2],
		[1, -2], [1, 2],
		[2, -1], [2, 1]
	];
}

Knight.prototype.getOffsets = function(piece, states){
	return this.offsets;
}

module.exports = Knight;