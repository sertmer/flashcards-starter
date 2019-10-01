const chai = require('chai');
const expect = chai.expect;

const Turn = require('../src/Turn');
const Card = require('../src/Card');

describe('Turn', function() {

  let card = '';
  let turn = '';

  beforeEach(() => {
    card = new Card({ id: 1, question: 'What allows you to define a set of related information using key-value pairs?', answers: ['object', 'array', 'function'], correctAnswer: 'object' });
    turn = new Turn('object', card);

    });

    it('should be a function', function() {
      const turn = new Turn();
      expect(Turn).to.be.a('function');
    });

    it('should be an instance of Card', function() {
      const turn = new Turn();
      expect(turn).to.be.an.instanceof(Card);
    }); 
};