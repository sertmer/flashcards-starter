const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
    this.currentCard = deck.cards[0];
  }
  
  returnCurrentCard() {
    return this.currentCard;
  }

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turn++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    }
    let nextCard = (this.deck.cards.indexOf(this.currentCard) + 1);
    this.currentCard = this.deck.cards[nextCard];
    return turn.giveFeedback(guess);
  }

  calculatePercentCorrect() {
    if (!this.incorrectGuesses.length) {
      return 100;
    } else {
      return Math.floor((this.turn - this.incorrectGuesses.length) / this.turn * 100);
    }
  }

  endRound() {
    console.log(`** Round Over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`);
    return `** Round Over! ** You answered ${this.calculatePercentCorrect()}% of the questions correctly!`
  }
}

module.exports = Round;