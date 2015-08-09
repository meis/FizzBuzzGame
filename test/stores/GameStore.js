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

  it('updates squares on add', () => {
    GameActions.put(0,1);
    assert.equal(GameStore.getState().squares[0], 1);

    GameActions.put(0,3);
    assert.equal(GameStore.getState().squares[0], 4);

    GameActions.put(1,8);
    assert.equal(GameStore.getState().squares[1], 8);
    assert.equal(GameStore.getState().squares[0], 4);
  });

  it('updates score and throws combos on add', () => {
    assert.equal(GameStore.getState().score, 0);

    GameActions.put(0,3);
    assert.equal(GameStore.getState().score, 3*3);
    assert.equal(GameStore.getState().combos[0], 'fizz');

    GameActions.put(0,1);
    assert.equal(GameStore.getState().score, 9);
    assert.equal(GameStore.getState().combos[0], '');

    GameActions.put(1,2);
    assert.equal(GameStore.getState().score, 9);
    assert.equal(GameStore.getState().combos[1], '');

    GameActions.put(1,3);
    assert.equal(GameStore.getState().score, 9 + 5*5);
    assert.equal(GameStore.getState().combos[1], 'buzz');

    GameActions.put(3,11);
    assert.equal(GameStore.getState().score, 34);
    assert.equal(GameStore.getState().combos[3], '');

    GameActions.put(3,4);
    assert.equal(GameStore.getState().score, 15*15 + 34);
    assert.equal(GameStore.getState().combos[3], 'fizzbuzz');

    GameActions.put(0,9);
    assert.equal(GameStore.getState().score, 10*5 + 259);
    assert.equal(GameStore.getState().combos[0], 'buzz');
  });
});
