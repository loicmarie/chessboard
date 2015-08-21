Feature: Moving a piece
	As a player
	I want to move a piece
	So that I can play a game

	Background:
		Given I init the chessboard with the "start" position

	Scenario: Move a pawn along one square
		When "whites" play "e3"
		Then I should have a valid position

	Scenario: Init chessboard with a JSON position
		Given I want to init with a "JSON" position
		When I init chessboard
		Then I should have a valid JSON position

	Scenario: Init chessboard with a FEN position
		Given I want to init with a "FEN" position
		When I init chessboard
		Then I should have a valid JSON position
