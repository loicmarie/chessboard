var Piece = require('./pieces/Piece.js');

function Chessboard() {
	this.states = [this.getChessboardFromJSON(require('./positions/start-position.json'))];
}

Chessboard.prototype.getChessboardFromJSON = function(json){
	for(var i=0; i<json.position.length; i++){
		for(var j=0; j<json.position[i].length; j++){
			json.position[i][j] = (json.position[i][j] != '')
				? new Piece(json.position[i][j], {row:i, column:j})
				: null;
		}
	}
	return json;
}

function charToNumber(character){
	return 7 - (character.charCodeAt(0) - 97);
}

function moveToJSON(move){
	switch(move){
		case 'O-O': 
			break;
		case 'O-O-O':
			break;
		default:
			if(move.indexOf('x') > -1){
				move = move.replace(/x/g, '');
			}
			var row = move.substring(move.length-1, move.length),
				column = move.substring(move.length-2, move.length-1),
				firstChar = move.substring(0, 1),
				which = move.replace(firstChar, '').replace(row, '').replace(column, '');
				console.log('--> '+row);
				console.log('--> '+column);
			console.log(which);
			return {
				piece: (firstChar == firstChar.toUpperCase()) ? firstChar : 'P',
				row: parseInt(row)-1,
				column: charToNumber(column)
			}
	}
}

Chessboard.prototype.getOrigin = function(move){
	var current_position = this.states[this.states.length-1].position;
	for(var i=0; i<current_position.length; i++){
		for(var j=0; j<current_position[i].length; j++){
			if(current_position[i][j]
				&& current_position[i][j].piece 
				&& current_position[i][j].piece.id == move.piece.toUpperCase() 
				&& current_position[i][j].isValidMove(this.states, move)){

				return {
					column: j,
					row: i
				};
			}
		}
	}
	throw new Error('Invalid move: There is no piece to move');
}

Chessboard.prototype.getState = function(){
	return this.states[this.states.length-1].position;
}

Chessboard.prototype.play = function(move){
	move = moveToJSON(move);
	var origin = this.getOrigin(move);

	this.move(origin.column, origin.row, move.column, move.row);
}

Chessboard.prototype.move = function(x1, y1, x2, y2){
	var new_state = this.states[this.states.length-1];

	if(new_state.position[y1][x1].isValidMove(this.states, {row: y2, column: x2})){
		new_state.position[y2][x2] = new_state.position[y1][x1];
		new_state.position[y1][x1] = null;

		new_state.position[y2][x2].pos.row = y2;
		new_state.position[y2][x2].pos.column = x2;

		new_state.player = (new_state.player == 'w') ? 'b' : 'w';
		
		this.states.push(new_state);
		
	} else {
		throw new Error('Invalid move');
	}
}

Chessboard.prototype.toString = function(){
	var current_position = this.states[this.states.length-1].position,
		str = "";
	for(var i=current_position.length-1; i>=0; i--){
		for(var j=current_position[i].length-1; j>=0; j--){
			str += (current_position[i][j] && current_position[i][j].piece && current_position[i][j].piece.id) 
				? " "+((current_position[i][j].piece.color == 'b')
					? current_position[i][j].piece.id.toLowerCase()
					: current_position[i][j].piece.id.toUpperCase())+" "
				: " . ";
		}
		str += "\n";
	}
	return str;
}

module.exports = Chessboard;