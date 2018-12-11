// *** DECLARE GLOBAL VARIABLES / FUNCTIONS
// Letter constructor
function Letter(underlyingCharacter) {
  this.underlyingCharacter = underlyingCharacter,
  this.guessedFlag = false,
  this.toString = function() {
    if (this.guessedFlag) {
      return this.underlyingCharacter;
    } else {
      return '_';
    }
  },
  this.checkGuess = function(character) {
    if (character === this.underlyingCharacter) {
      this.guessedFlag = true;
    }
  }
}

// Export letter constructor
module.exports = Letter;