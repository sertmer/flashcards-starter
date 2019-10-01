class Turn {
  constructor(guess, card) {
    this.count = 0;
    
  };

  returnGuess() {
    // returns the guess
  };

  returnCard() {
    // returns the card (in play?)
  };

  evaluateGuess() {
    // returns boolean indicating is user's guess matches correct answer on card
  };

  giveFeedback() {
    // returns either 'incorrect!' or 'correct!' based on if guess is correct or nah
  };
};

module.exports = Turn;