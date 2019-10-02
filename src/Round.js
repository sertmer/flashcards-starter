class Round {
  constructor(deck) {
    this.deck = deck;
    this.turns = 0;
    this.incorrectGuesses = [];
    this.currentCard = deck.cards[0];
  };
  
  returnCurrentCard() {
    return this.currentCard
  };

  takeTurn() {
    // updates {turn}'s count property,
    // evaluates guesses,
    // gives feedback,
    // stores ID's of incorrect guesses
  };

  calculatePercentCorrect() {
    // calc's and returns percentage of correct guesses
  };

  endRound() {
    // console.log's '**Round over!** You answered <>% of the quwstions correctly!'
  }
};

module.exports = Round;