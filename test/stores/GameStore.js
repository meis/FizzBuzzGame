import Alt         from 'src/Alt';
import GameStore   from 'src/stores/GameStore';
import GameActions from 'src/actions/GameActions';
import {assert}    from 'chai';

describe('GameStore', () => {
  // Restore all stores to original state before each test.
  beforeEach( () => {
    Alt.flush();
  });

  it('sets up instance properties correctly', () => {
    assert.equal(GameStore.getState().remaining.length, 100);
    assert.equal(GameStore.getState().finished, false);
    assert.equal(GameStore.getState().score, 0);
    assert.isNumber(GameStore.getState().remaining[0]);
    assert.isAbove(GameStore.getState().remaining[0], 0);
    assert.isBelow(GameStore.getState().remaining[0], 101);
  });

  it('sets up square values correctly', () => {
    assert.equal(GameStore.getState().squares.length, 9);
    GameStore.getState().squares.forEach( (s) => {
      assert.equal(s, 0);
    });
  });

  it('decreases the number of plays as game goes along', () => {
    assert.equal(GameStore.getState().remaining.length, 100);
    GameActions.put();
    assert.equal(GameStore.getState().remaining.length, 99);
    GameActions.put();
    assert.equal(GameStore.getState().remaining.length, 98);
    assert.equal(GameStore.getState().finished, false);
  });

  it('finish game after 100 puts', () => {
    for(let i = 0; i < 100; i++) {
      assert.isNumber(GameStore.getState().remaining[0]);
      assert.isAbove(GameStore.getState().remaining[0], 0);
      assert.isBelow(GameStore.getState().remaining[0], 101);
      GameActions.put();
    }
    assert.isUndefined(GameStore.getState().remaining[0]);
    assert.equal(GameStore.getState().finished, true);
  });
});
