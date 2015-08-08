import Alt       from 'src/alt';
import GameStore from 'src/stores/gameStore';
import {assert}  from 'chai';

describe('GameStore', () => {
  // Restore all stores to original state before each test.
  beforeEach( () => {
    Alt.recycle();
  });

  it('sets up instance properties correctly', () => {
    assert.equal(GameStore.getState().remainingPlays, 100);
    assert.isNumber(GameStore.getState().nextPlay);
    assert.isAbove(GameStore.getState().nextPlay, 0);
    assert.isBelow(GameStore.getState().nextPlay, 101);
  });
});
