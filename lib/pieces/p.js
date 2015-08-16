module.exports = {
	"name": "pawn",
	"char": "p",
	"valid_moves": function(game){
		var moves = [];
		if(game[game.length-1].player == "b"){
			moves.push({
				"dx": 0,
				"dy": 1
			});
		} else {
			moves.push({
				"dx": 0,
				"dy": -1
			});
		}
		return moves;
	}
};