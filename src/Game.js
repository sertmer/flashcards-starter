const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck, round) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    // starts it all
    // instantiate cards
    // push cards into deck (instantiates deck from array of cards??)
    // creates new round using deck (??)
    // invokes printMessage in the CLI
    // invokes printQuestion to kick off helper functions that allow interaction via the CLI
  }
}

module.exports = Game;