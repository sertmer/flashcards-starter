const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card;
  let turn;

  beforeEach(() => {
    card = new Card({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
    turn = new Turn('object', card);
    });

    it('should be a function', function() {
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Turn', function() {
      expect(turn).to.be.an.instanceof(Turn);
    }); 

    it('should have a guess', function() {
      expect(turn.guess).to.equal('object');
    });

    it('should have a card', function() {
      expect(turn.card).to.equal(card);
    });

    it('should have a method called returnGuess' , function() {
      expect(turn.returnGuess).to.be.a('function');
    });

    it('should return a guess when returnGuess is invoked' , function() {
      expect(turn.returnGuess()).to.equal('object');
    });

    it('should have a method called returnCard', function() {
      expect(turn.returnCard).to.be.a('function');
    });

    it('should return the current card when returnCard is invoked' , function() {
      expect(turn.returnCard()).to.equal(card);
    });

    it('should have a method called evaluateGuess', function() {
      expect(turn.evaluateGuess).to.be.a('function');
    });
    
    it('should evaluate if a guess is correct', function() {
      
    });
});

// it('should', function() {

// });