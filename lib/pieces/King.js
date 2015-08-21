var Piece = require('./Piece.js');

function King(color){
	this.color = color;

	this.name = 'King';
	this.id = 'K';
	this.maxScope = 1;
	this.offsets = [
		[1, 1], [1, 0], [1, -1],
		[0, 1], [0, 0], [0, -1],
		[-1, 1], [-1, 0], [-1, -1]
	];
}

King.prototype.getOffsets = function(piece, states){
	return this.offsets;
}

module.exports = King;