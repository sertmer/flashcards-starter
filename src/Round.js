const Turn = require('../src/Turn');

class Round {
  constructor(deck) {
    this.deck = deck;
    this.turn = 0;
    this.incorrectGuesses = [];
    this.currentCard = deck.cards[0];
  };
  
  returnCurrentCard() {
    return this.currentCard;
  };

  takeTurn(guess) {
    let turn = new Turn(guess, this.currentCard);
    this.turn++;
    if (!turn.evaluateGuess()) {
      this.incorrectGuesses.push(this.currentCard.id);
    };
    let nextCard = (this.deck.cards.indexOf(this.currentCard) + 1);
    this.currentCard = this.deck.cards[nextCard];
    return turn.giveFeedback(guess);
  };

  calculatePercentCorrect() {
    // calc's and returns percentage of correct guesses
  };

  endRound() {
    // console.log's '**Round over!** You answered <>% of the quwstions correctly!'
  }
};

module.exports = Round;