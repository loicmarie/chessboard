var Piece = require('./Piece.js');

function Bishop(color){
	this.color = color;

	this.name = 'Bishop';
	this.id = 'B';
	this.maxScope = 7;
	this.offsets = [
		[1, 1], [1, -1],
		[-1, 1], [-1, -1]
	];
}

Bishop.prototype.getOffsets = function(piece, states){
	return this.offsets;
}

module.exports = Bishop;