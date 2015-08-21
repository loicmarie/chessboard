var Rook = require('./Rook.js'),
	Knight = require('./Knight.js'),
	Bishop = require('./Bishop.js'),
	Queen = require('./Queen.js'),
	King = require('./King.js'),
	Pawn = require('./Pawn.js');

function Piece(char, pos){
	switch(char){
		case 'R':
			this.piece = new Rook('w');
			break;
		case 'r':
			this.piece = new Rook('b');
			break;
		case 'N':
			this.piece = new Knight('w');
			break;
		case 'n':
			this.piece = new Knight('b');
			break;
		case 'B':
			this.piece = new Bishop('w');
			break;
		case 'b':
			this.piece = new Bishop('b');
			break;
		case 'Q':
			this.piece = new Queen('w');
			break;
		case 'q':
			this.piece = new Queen('b');
			break;
		case 'K':
			this.piece = new King('w');
			break;
		case 'k':
			this.piece = new King('b');
			break;
		case 'P':
			this.piece = new Pawn('w');
			break;
		case 'p':
			this.piece = new Pawn('b');
			break;
	}
	this.pos = pos;
}

Piece.prototype.isValidMove = function(states, dest){

	var isValidMove = false,
		current_state = states[states.length-1],
		offsets = this.piece.getOffsets(this, states),
		cell = current_state.position[dest.row][dest.column];
	if(cell && cell.piece.color == this.piece.color){
		return false;
	} else if(current_state.player != this.piece.color){
		return false;
	}

	for(var off=0; off<offsets.length; off++){
		var hasVisibility = true, 
			i=1;
		while(i<=this.piece.maxScope && hasVisibility && this.isOnBoardAfterMove(offsets[off][0]*i, offsets[off][1]*i)){
			if(this.pos.row+(offsets[off][0]*i) == dest.row && this.pos.column+(offsets[off][1]*i) == dest.column){
				isValidMove = true;
			} else if(current_state.position[this.pos.row+(offsets[off][0]*i)][this.pos.column+(offsets[off][1]*i)]){
				hasVisibility = false;
			}
			i++;
		}
	}
	return isValidMove;
}

Piece.prototype.isOnBoardAfterMove = function(drow, dcolumn){
	return this.pos.row + drow <= 7
		&& this.pos.row + drow >= 0
		&& this.pos.column + dcolumn <= 7
		&& this.pos.column + dcolumn >= 0;
};

module.exports = Piece;