// *** DECLARE GLOBAL VARIABLES / FUNCTIONS
// Letter constructor
var Letter = function(underlyingCharacter, guessedFlag) {
  this.underlyingCharacter = underlyingCharacter;
  this.guessedFlag = guessedFlag;
  this.toString = function() {
    if (this.guessedFlag) {
      return this.underlyingCharacter;
    } else {
      return '_';
    }
  };
  this.checkGuess = function(character) {
    if (character === this.underlyingCharacter) {
      this.guessedFlag = true;
    } else {
      this.guessedFlag = false;
    }
  };
};

// Export letter constructor
module.exports = Letter;