Feature: Init chessboard
	As a user 
	I want to init chessboard
	So that I can use it

	Scenario: Init chessboard without position
		Given I want to init without position
		When I init chessboard
		Then I should have a valid JSON position

	Scenario: Init chessboard with a JSON position
		Given I want to init with a "JSON" position
		When I init chessboard
		Then I should have a valid JSON position

	Scenario: Init chessboard with a FEN position
		Given I want to init with a "FEN" position
		When I init chessboard
		Then I should have a valid JSON position
