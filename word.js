// *** REQUIRED MODULES
var Letter = require('./letter.js');

// *** DECLARE GLOBAL VARIABLES / FUNCTIONS
// Word constructor
function Word() {
  this.letterObjects = [],  
  this.createLetterObject = function(word) {
    for (var i = 0; i < word.length; i++) {
      this.letterObjects.push(new Letter(word[i]));
    }
  },
  this.returnString = function(word) {
    return this.letterObjects.join(' ');
  },
  this.callGuess = function(guessedLetter) {    
    for (var i = 0; i < this.letterObjects.length; i++) {
      this.letterObjects[i].checkGuess(guessedLetter);
    }
  }
}

// Export word constructor
module.exports = Word;