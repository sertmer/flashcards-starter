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
  let turn;

  beforeEach(() => {
    card1 = new Card(1, 'What is Robbie\'s favorite animal', ['sea otter', 'pug', 'capybara'], 'sea otter');
    card2 = new Card(14, 'What organ is Khalid missing?', ['spleen', 'appendix', 'gallbladder'], 'gallbladder');
    card3 = new Card(12, 'What is Travis\'s middle name?', ['Lex', 'William', 'Fitzgerald'], 'Fitzgerald');
    // turn = new Turn('sea otter', card1);
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
    expect(round.turn).to.equal(0);
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
    expect(round.takeTurn).to.be.a('function');
  });

  it('takeTurn method should instantiate a new turn', () => {
    expect(round.takeTurn('sea otter')).to.equal('Correct!');
    expect(round.takeTurn('spleen')).to.equal('Incorrect!');
  });

  it('should keep track of how many turns have happened', () => {
    round.takeTurn('sea otter');
    expect(round.turn).to.equal(1);
    round.takeTurn('sea otter');
    round.takeTurn('sea otter');
    expect(round.turn).to.equal(3);
  });

  it('should give feedback for each guess', () => {
    expect(round.takeTurn('sea otter')).to.equal('Correct!');
    expect(round.takeTurn('capybara')).to.equal('Incorrect!')
  });

  it('should store ID\'s of incorrect guesses', () => {
    round.takeTurn('sea otter');
    expect(round.incorrectGuesses).to.deep.equal([]);
    round.takeTurn('capybara');
    expect(round.incorrectGuesses).to.deep.equal([14]);
  });

  it('should make the next card become the current card after a round', () => {
    expect(round.currentCard).to.equal(card1);
    round.takeTurn();
    expect(round.currentCard).to.equal(card2);
    round.takeTurn();
    expect(round.currentCard).to.equal(card3);
  });

  it('should calculate the percentage of correct guesses', () => {
    round.takeTurn('sea otter');
    round.takeTurn('spleen');
    round.takeTurn('Lex');
    expect(round.incorrectGuesses.length).to.equal(2);
    expect(round.calculatePercentCorrect()).to.equal(33);
  });

  it('should end the round with a message including percent of answers correct', () => {
    round.takeTurn('sea otter');
    expect(round.endRound()).to.equal('** Round Over! ** You answered 100% of the questions correctly!');
    round.takeTurn('spleen');
    expect(round.endRound()).to.equal('** Round Over! ** You answered 50% of the questions correctly!');
    round.takeTurn('Lex');
    expect(round.endRound()).to.equal('** Round Over! ** You answered 33% of the questions correctly!');
  });

});
