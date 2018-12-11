// *** REQUIRED MODULES
var inquirer = require('inquirer');
var Word = require('./word.js');
  
// *** DECLARE GLOBAL VARIABLES / FUNCTIONS
var wordsStart = ['JavaScript', 'Variable', 'Function', 'Array', 'HTML', 'CSS', 'jQuery', 'Terminal', 'Pseudocode', 'MERN'];
var wordsRemain = wordsStart.slice();
var wordsIndex, currentWord, guessRemain, word, guessedWordFlag;
var guessedLetters = [];

// Select word from remaining words array
function selectWord() {
  guessRemain = 12;
  guessedLetters = [];
  wordsIndex = Math.floor(Math.random() * wordsRemain.length);
  currentWord = wordsRemain.splice(wordsIndex, 1).toString().toLowerCase();
  word = new Word();
  word.createLetterObject(currentWord);    
  startGuessing();
}

// Prompt for letter guesses
function startGuessing() {
  if (guessRemain > 0) {    
    console.log('\n' + word.returnString(currentWord) + '\n');
    
    // Inquirer prompt for letter of input type with validate property
    inquirer.prompt([
      {
        type: 'input',
        name: 'letter',
        message: '? Guess a letter!',
        validate: function(value) {
          var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
          var flag = false;
          for (var i = 0; i < alphabet.length; i++) {
            if (value === alphabet[i]) {
              flag = true;
              for (var j = 0; j < guessedLetters.length; j++) {
                if (value === guessedLetters[j]) {
                  flag = false;
                }
              }
            }
          }
          return flag;
        }
      }
    // Promise callback to call callGuess() method of Word constructor
    ]).then(function(guess) {
      var guess = guess.letter.toLowerCase();      
      guessedLetters.push(guess);
      word.callGuess(guess);

      // Check if any letters have not been guessed
      guessedWordFlag = true;
      for (var i = 0; i < word.letterObjects.length; i++) {      
        if (word.letterObjects[i].guessedFlag === false) {
          guessedWordFlag = false;
        }
      }
      
      // Check if all letters have been guessed and words remain to be guessed
      if (guessedWordFlag === true && wordsRemain.length > 0) {
        console.log(word.returnString(currentWord));
        console.log('\nYou got it right! Next word!');
        return selectWord();
      } else if (guessedWordFlag === true && wordsRemain.length === 0) {
        console.log(word.returnString(currentWord));
        console.log('\nYou got it right! No more words...Game Over!');
        return;
      }

      // Display letters guessed, remaining guesses and continue prompting for guesses; recursive call on startGuessing()
      console.log('\nLetters guessed: ' + guessedLetters.join(' '));
      guessRemain--;
      console.log('\n' + guessRemain + ' guesses remaining!');
      startGuessing();
    });
  } else {
    // Check if words remain to be guessed and call selectWord() or end game
    if (wordsRemain.length > 0) {
      console.log('\nYou got it wrong! Next word!');
      selectWord()
    } else {
      console.log('\nYou got it wrong! No more words...Game Over!');
      return;
    }
  }
  
}

// *** MAIN CONTROLLER
// Start game by selecting first word
selectWord();
