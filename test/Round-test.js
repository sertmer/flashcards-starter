const chai = require('chai');
const expect = chai.expect;

const Card = require('../src/Card');
const Deck = require('../src/Deck');
const Turn = require('../src/Turn');
const Round = require('../src/Round');

describe('Round', function() {

  let card1;
  let card2;
  let card3;
  let deck;
  let round;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
    round = new Round(deck);
  });

  it('should be a function', () => {
    expect(Round).to.be.a('function');
  });

  it('should be an instance of Round', () => {
    expect(round).to.be.an.instanceof(Round);
  });

  it('should start on turn 0', () => {
    expect(round.turns).to.equal(0);
  });

  it('should start with a deck of cards', () => {
    expect(round.deck).to.equal(deck)
  });

  it('should start with no incorrect guesses', () => {
    expect(round.incorrectGuesses.length).to.equal(0);
  });

  it('should take it\'s current card from the top of the deck', () => {
    expect(round.currentCard).to.equal(card1);

    let card4 = new Card(
      5,
      "What type of prototype method loops through the existing array and applies a callback function that may mutate each element and return a new value?",
      ["mutator method", "accessor method", "iteration method"],
      "iteration method"
    );

    deck = new Deck([card4, card2, card3, card1]);
    round = new Round(deck)
    
    expect(round.currentCard).to.equal(card4);
  });

  it('should return the current card', () => {
    expect(round.returnCurrentCard()).to.equal(card1);
  });

  it('should be able to take a turn', () => {
    // expect(round.takeTurn)
  });

  it('should keep track of how many turns have happend', () => {
    // expect(round.takeTurn)
  });

  it('should evaluate each guess', () => {
    // expect(round.takeTurn)
  });

  it('should should give feedback', () => {
    // expect(round.takeTurn)
  });

  it('should store ID\'s of incorrect guesses', () => {
    // expect(round.takeTurn)
  });

});

// it('should', () => {
//   expect;
// });