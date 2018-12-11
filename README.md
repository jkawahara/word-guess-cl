# Getting Started - Word Guess Game
### 1. Why / Background
  * This is Berkeley Coding Boot Camp (BCBC) week 6 homework assignment.
    * The BCBC curriculum generally focuses on JavaScript along with HTML/CSS, using the MERN (MongoDB, Express, React, Node) software stack, to teach web development skills across the client and server. 
  * The Word Guess Game is a command-line node application that takes in parameters and returns data.
    * The game randomly selects a word and prompts user for letter guesses until the word is guessed or number of guesses runs out.

### 2. What / Objectives / User Stories
  * This project development, from design through deployment of the Word Guess Game application, used Node.js as the primary web development technology on the server side along with npm:
    * The following npm packages were used:
      * prompt: command-line prompt for node.js
  * User Stories, by categorization:
    * Letter.js constructor
    * Word.js constructor
    * Index.js contains logic for game

### 3. How / Design Description
  * The scope of the project fit well into [Agile methodology with Scrum and Kanban frameworks](https://en.wikipedia.org/wiki/Agile_software_development). Due to limited scope and non-group assignment, GitHub's built-in tools were not used to support project execution:
    * [Projects](https://github.com/jkawahara/word-guess-game-cl/projects) Kanban board for documenting user stories and overall progress
    * [Issues](https://github.com/jkawahara/word-guess-game-cl/issues) Issue tracking for user stories, features and bug report
  * Functionality - refer to [video of application user flow](https://drive.google.com/drive/folders/1DLrzmSzKT2EsZuXs3bExjs2jGyQZEbYn?usp=sharing):
    * Design Description
      * Index main controller
        * Run application if command is entered in terminal
        * Command: node index.js
        * Relevant modules: selectWord(), startGuessing(), index.js 
      * Letter constructor
        * This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter
        * Command: N/A
        * Relevant modules: Letter(), letter.js
      * Word constructor
        * This is used to create an object representing the current word the user is attempting to guess
        * Command: N/A
        * Relevant modules: Word(), word.js

  * Prerequisites for Development:
    * MacBook Air (Intel Core i7, 2.2 GHz, 1 Processor, 2 Cores, 8GB)
    * 64 bit operating system 
    * git version 2.18.0
    * Visual Studio Code Version 1.29.1
    * [GitHub word-guess-game-cl](https://github.com/jkawahara/word-guess-game-cl)
    * Chrome Version 70.0.3538.110 (Official Build) (64-bit)

  * Built With:
    * [Node.js](https://nodejs.org/docs/latest/api/documentation.html)
    * [npm](https://www.npmjs.com/)
      * [prompt](https://www.npmjs.com/package/prompt)

  * Installing:
    * For further development or use of this application, clone or download application files from GitHub, which is organized into the following directory structure:
      * /word-guess-game-cl
        * /node_modules (ignored by git) - generated first time npm install executes
        * .gitignore
        * index.js
        * letter.js
        * LICENSE
        * package-lock.json - generated each time npm install executes
        * package.json - includes dependencies: inquirer
        * README.md
        * word.js
    * Once the application files are ready per the above structure, go to the application root directory level /word-guess-game-cl and enter the following to install required node packages. This executes by refering to the included dependencies in package.json and creates required node packages in /node_modules and package-lock.json:
      * npm install

  * Running the tests:
    * Unit testing & integration testing was informally executed

  * Deployment:
    * N/A as this is a command-line application

## Versioning
  * For the versions available, see the tags on this repository.

## Authors
  * John Kawahara.
  * N/A- See also the list of contributors who participated in this project.

## License
  * This project is licensed under the [MIT License](LICENSE).

## Acknowledgments
  * Thanks to BCBC program personnel, especially our instructor, David Hallinan, along with our TAs Hannah Bowers and Glo Austin, for their guidance and support.
