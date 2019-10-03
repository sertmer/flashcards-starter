const data = require('./data');
const prototypeQuestions = data.prototypeData;
const util = require('./util');
const Deck = require('../src/Deck');
const Round = require('../src/Round');
const Card = require('../src/Card');

class Game {
  constructor() {
    this.currentRound = 0;
  }

  printMessage(deck) {
      console.log(`Welcome to FlashCards! You are playing with ${deck.countCards()} cards.
-----------------------------------------------------------------------`)
  }

  printQuestion(round) {
      util.main(round);
  }

  start() {
    let cards = [];
    prototypeQuestions.forEach(function(question) {
      const card = new Card(question.id, question.question, question.answers, question.correctAnswer);
      cards.push(card);
    });
    const deck = new Deck(cards);
    const round = new Round(deck);
    this.currentRound = round;
    this.printMessage(deck, round);
    this.printQuestion(round);
  }
}

module.exports = Game;