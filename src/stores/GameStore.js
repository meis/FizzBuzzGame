import Alt from '../Alt';
import shuffle from 'shuffle-array';

class GameStore {
  constructor() {
    this._values = shuffle(Array.apply(0, Array(100)).map(function(x, y) { return y + 1 }));

    this.state = {
      remainingPlays: 100,
      nextPlay      : this._values.pop()
    };
  }
}

export default Alt.createStore(GameStore, 'GameStore');
