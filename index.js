// *** REQUIRED MODULES
var inquirer = require('inquirer');
var Word = require('./word.js');
  
// *** DECLARE GLOBAL VARIABLES / FUNCTIONS
var wordsStart = ["JavaScript", "Variable", "Function", "Array", "HTML", "CSS", "jQuery", "Terminal", "Pseudocode", "MERN"];
var wordsRemain = wordsStart.slice();
var wordsIndex, currentWord, guessRemain, word;
var guessedLetters = [];

function selectWord() {
  guessRemain = 12;
  guessedLetters = [];
  wordsIndex = Math.floor(Math.random() * wordsRemain.length);
  currentWord = wordsRemain.splice(wordsIndex, 1).toString().toLowerCase();
  console.log(currentWord);
  word = new Word();    
  startGuessing();
}
 
function startGuessing() {
  if (guessRemain > 0) {
    console.log(word.returnString(currentWord));
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
      console.log('Letters guessed: ' + guessedLetters.join(' '));
      guessRemain--;
      startGuessing();
    });
  } else {
    if (wordsRemain.length > 0) {
    console.log('You got it wrong! Next word!');
    selectWord()
    } else {
      console.log('Game over!');
    }
  }
  
}

// *** MAIN CONTROLLER
selectWord();

// var word = new Word();
// console.log(word.returnString('javascript'));
