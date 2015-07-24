var startPosition = require('./positions/start-position.json');

Object.defineProperty(Chessboard.prototype, 'position', {
	set: function(pos){
		if('string' === typeof pos){
			pos = convertFEN(pos);
		}
		this.positionP = pos;
	},
	get: function(){
		return this.positionP;
	}
});

function Chessboard(position) {
	this.position = position || require('./positions/start-position.json');
}


function isValidMove(move){
	
}

function convertFEN(fen){
	fen = fen.split(' ');
	console.log(fen);
}

Chessboard.prototype.get = function(){
	return this.position;
}

module.exports = Chessboard;