import Alt         from '../Alt';
import GameActions from '../actions/GameActions';
import shuffle     from 'shuffle-array';

class GameStore {
  constructor() {
    this.bindActions(GameActions);

    this._values = shuffle(Array.apply(0, Array(100)).map(function(x, y) { return y + 1 }));

    this.state = {
      remaining: 100,
      nextPlay : this._values.pop(),
      finished : false
    };
  }

  onPlay() {
    this.state.remaining--;

    this.state.finished = this.state.remaining === 0;
  }
}

export default Alt.createStore(GameStore, 'GameStore');
