const chai = require('chai');
const expect = chai.expect;

const Game = require('../src/Game')

describe('Game', () => {

  let game;

  beforeEach(() => {
    game = new Game();
  });

  it('should be a function', () => {
    expect(Game).to.be.a('function')
  });

  it('should be a instance of Game', () => {
    expect(game).to.be.an.instanceOf(Game);
  });

  it('should start on round 0', () => {
    expect(game.currentRound).to.equal(0);
    // console.log(game.currentRound);
    // console.log(game.start());
  });

});