class Deck {
  constructor(cards) {
    this.cards = cards;
  };

  countCards() {
    // returns num of cards in deck
    return this.cards.length;
  };
};

module.exports = Deck;