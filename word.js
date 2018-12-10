// *** REQUIRED MODULES
var Letter = require('./letter.js');

// *** DECLARE GLOBAL VARIABLES / FUNCTIONS
// Word constructor
var Word = function() {
  this.wordArray = [];
  this.wordString = function(currentWord) {
    for (var i = 0; i < currentWord.length; i++) {
      var letter = new Letter(currentWord[i]);
      this.wordArray.push(letter.toString());
    }
    return this.wordArray.join(' ');
  };
  this.callGuess = function(character) {
    var letter = new Letter(character);
    letter.checkGuess(character);    
  };
};

// Export word constructor
module.exports = Word;