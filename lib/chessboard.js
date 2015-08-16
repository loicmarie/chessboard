var startPosition = require('./positions/start-position.json');

function Chessboard(state) {
	this.game = [state || require('./positions/start-position.json')];
}

function charToNumber(character){
	return 8 - (character.charCodeAt(0) - 97);
}

function moveToJSON(move){
	switch(move){
		case 'O-O': 
		case 'O-O-O':
		default:
			return {
				piece: move.substring(move.length-3, move.length-2),
				row: move.substring(move.length-1, move.length),
				column: move.substring(move.length-2, move.length-1)
			}
			break;
	}
}

Chessboard.prototype.isValidMove = function(move){
	var origin = this.getMoveOrigin(move);
	console.log(origin);
	if (origin){
		this.game[this.game.length-1].position[origin.row][origin.column] = '';
		this.game[this.game.length-1].position[parseInt(move.row)-1][charToNumber(move.column)-1] = move.piece;
	}
}

Chessboard.prototype.get = function(){
	return this.game[this.game.length-1];
}

Chessboard.prototype.getMoveOrigin = function(move){
	var piece = require('./pieces/' + move.piece.toLowerCase() + '.js'),
		moves = (typeof piece.valid_moves === 'function') ? piece.valid_moves(this.game) : piece.valid_moves;
	// is piece on the case
	for(var i=0; i<piece.valid_moves.length; i++){
		var dx = moves[i].dx,
			dy = moves[i].dy;
			console.log((parseInt(move.row)-1+dx)+' et '+(charToNumber(move.column)-1+dy));
		if(this.game[this.game.length-1].position[parseInt(move.row)-1+dx][charToNumber(move.column)-1+dy] == move.piece){
			return {
				piece: move.piece,
				row: parseInt(move.row)-1+dx,
				column: charToNumber(move.column)-1+dy
			}
			break;
		}
	}
	return false;
}

Chessboard.prototype.play = function(move){
	var moveJSON = moveToJSON(move);
	this.isValidMove(moveJSON);
}

module.exports = Chessboard;