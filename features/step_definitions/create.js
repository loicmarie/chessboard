var Chessboard = require('../../lib/chessboard.js'),
    assert = require('assert');

module.exports = function () {

    var position, chessboard;

    this.Given(/^I want to init with a "([^"]*)" position$/, function (format, callback) {
  
        switch(format){
            case "JSON":
                position = require('./Fixtures/init-01.json').fixture;
                break;
            case "FEN":
                position = require('./Fixtures/init-02.json').fixture;
                break;
            default:
                position = undefined;
                break;
        }
        callback();

    });

    this.Given(/^I want to init without position$/, function (callback) {
  
        position = undefined;
        callback();

    });

    this.When(/^I init chessboard$/, function (callback) {

        chessboard = new Chessboard(position);
        callback();

    });

    this.Then(/^I should have a valid JSON position$/, function (callback) {

        assert.deepEqual(require('./Fixtures/init-01.json').fixture, chessboard.get());
        callback();

    });
};