class Turn {
  constructor(guess, card) {
    this.guess = guess;
    this.card = card;
    
  };

  returnGuess() {
    return this.guess;
  };

  returnCard() {
    return this.card;
  };

  evaluateGuess() {
    // returns boolean indicating is user's guess matches correct answer on card
  };

  giveFeedback() {
    // returns either 'incorrect!' or 'correct!' based on if guess is correct or nah
  };
};

module.exports = Turn;