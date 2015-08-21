var Piece = require('./Piece.js');

function Pawn(color){
	this.color = color;

	this.name = 'Pawn';
	this.id = 'P';
	this.maxScope = 1;
	this.offsets = [
		[ (this.color == 'w') ? 1 : -1, 0 ]
	];
}

Pawn.prototype.getOffsets = function(piece, states){
	if((this.color == 'w' && piece.pos.row == 1) || (this.color == 'b' && piece.pos.row == 6)){
		this.maxScope = 2;
	} else {
		this.maxScope = 1;
	}
	try {
		if(states[states.length-1].position[piece.pos.row + this.offsets[0][0]][piece.pos.column + this.offsets[0][0]]){
			this.offsets.push([this.offsets[0][0], this.offsets[0][0]]);
		}
		if(states[states.length-1].position[piece.pos.row + this.offsets[0][0]][piece.pos.column - this.offsets[0][0]]){
			this.offsets.push([this.offsets[0][0], -this.offsets[0][0]]);
		}
	} catch(e){}
	
	return this.offsets;
}

module.exports = Pawn;