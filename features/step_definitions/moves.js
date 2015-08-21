var Chessboard = require('../../lib/chessboard.js'),
    assert = require('assert');

module.exports = function () {

    var chessboard;

    this.Given(/^I init the chessboard with the "([^"]*)" position$/, function (position, callback) {
        chessboard = new Chessboard();
    });

    this.Given(/^When "([^"]*)" play "([^"]*)"$/, function (color, move, callback) {
        chessboard.play(move);
        console.log(chessboard.toString());
        callback();

    });

    this.Given(/^I want to init without position$/, function (callback) {
  
        callback();

    });

    this.When(/^I init chessboard$/, function (callback) {

        callback();

    });

    this.Then(/^I should have a valid JSON position$/, function (callback) {

        assert.deepEqual(require('./Fixtures/init-01.json').fixture, chessboard.get());
        callback();

    });
};