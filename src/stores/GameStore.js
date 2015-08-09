import Alt         from '../Alt';
import GameActions from '../actions/GameActions';
import Square      from '../models/Square';
import shuffle     from 'shuffle-array';

export class GameStore {
  constructor(squares = 9) {
    this.bindActions(GameActions);

    this.state = {
      remaining: shuffle(Array.apply(0, Array(100)).map( (x, y) => { return y + 1 } )),
      finished : false,
      score    : 0,
      squares  : Array.apply(0, Array(squares)).map( (x) => { return 0 } ),
    };
  }

  onPut(args = 0) {
    let square    = args;
    let remaining = this.state.remaining;
    let value     = remaining.shift();

    // It's possible to pass [square, value] to args. This comes for free
    // with 'alt' and its convenient for testing purposes.
    if (Array.isArray(args)) {
      square = args[0];
      value  = args[1];
    }

    let finished = remaining.length === 0;

    this.setState({ finished, remaining });
  }
}

export default Alt.createStore(GameStore, 'GameStore');
