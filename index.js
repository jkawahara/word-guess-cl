// *** REQUIRED MODULES
var inquirer = require('inquirer');
var Word = require('./word.js');
  
// *** DECLARE GLOBAL VARIABLES / FUNCTIONS
var wordsStart = ['JavaScript', 'Variable', 'Function', 'Array', 'HTML', 'CSS', 'jQuery', 'Terminal', 'Pseudocode', 'MERN'];
var wordsRemain = wordsStart.slice();
var wordsIndex, currentWord, guessRemain, word, guessedWordFlag;
var guessedLetters = [];

function selectWord() {
  guessRemain = 12;
  guessedLetters = [];
  wordsIndex = Math.floor(Math.random() * wordsRemain.length);
  currentWord = wordsRemain.splice(wordsIndex, 1).toString().toLowerCase();
  word = new Word();
  word.createLetterObject(currentWord);    
  startGuessing();
}
 
function startGuessing() {
  if (guessRemain > 0) {    
    console.log('\n' + word.returnString(currentWord) + '\n');
    inquirer.prompt([
      {
        type: 'input',
        name: 'letter',
        message: '? Guess a letter!',
        // validate: function(value) {
        //   var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        //   var flag = false;
        //   for (var i = 0; i < alphabet.length; i++) {
        //     if (value === alphabet[i]) {
        //       flag = true;
        //       for (var j = 0; j < guessedLetters.length; j++) {
        //         if (value === guessedLetters[i]) {
        //           flag = false;
        //         }
        //       }
        //     }
        //   }
        //   return flag;
        // }
      }
    ]).then(function(guess) {
      var guess = guess.letter.toLowerCase();      
      guessedLetters.push(guess);
      word.callGuess(guess);
      guessedWordFlag = true;
      for (var i = 0; i < word.letterObjects.length; i++) {      
        if (word.letterObjects[i].guessedFlag === false) {
          guessedWordFlag = false;
        }
      }
      
      if (guessedWordFlag === true && wordsRemain.length > 0) {
        console.log(word.returnString(currentWord));
        console.log('\nYou got it right! Next word!');
        return selectWord();
      } else if (guessedWordFlag === true && wordsRemain.length === 0) {
        console.log(word.returnString(currentWord));
        console.log('\nYou got it right! No more words...Game Over!');
        return;
      }
      console.log('\nLetters guessed: ' + guessedLetters.join(' '));
      guessRemain--;
      console.log('\n' + guessRemain + ' guesses remaining!');
      startGuessing();
    });
  } else {
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
selectWord();
