const chai = require('chai');
const expect = chai.expect;

const Deck = require('../src/Deck');
const Card = require('../src/Card');

describe('Deck', function () {
  let deck;
  let card1;
  let card2;
  let card3;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal',
      ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?',
      ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?',
      ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    deck = new Deck([card1, card2, card3]);
  });

  it('should be a function', function () {
    expect(Deck).to.be.a('function');
  });

  it('should be an instance of Deck', function () {
    expect(deck).to.be.an.instanceof(Deck);
  });

  it('should have a method called countCards', function () {
    expect(deck.countCards).to.be.a('function');
  });

  it('should count how many cards are in the deck', function () {
    expect(deck.countCards()).to.equal(3);
    let card4 = new Card(
      3,
      "What type of prototype method directly modifies the existing array?",
      ["mutator method", "accessor method", "iteration method"],
      "mutator method"
    );
    deck = new Deck([card1, card2, card3, card4]);
    expect(deck.countCards()).to.equal(4);
  });
});