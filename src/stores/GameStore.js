import Alt         from '../Alt';
import GameActions from '../actions/GameActions';
import Square      from '../models/Square';
import shuffle     from 'shuffle-array';

export class GameStore {
  constructor(positions = 3, moves = 100) {
    this.positions = positions;
    this.moves = moves;
    this.bindActions(GameActions);
    this.state = this.initialState();
  }

  initialState() {
    return {
      remaining: shuffle(Array.apply(0, Array(this.moves)).map( (x, y) => { return y + 1 } )),
      finished : false,
      score    : 0,
      squares  : Array.apply(0, Array(this.positions)).map( (x) => { return 0 } ),
      combos   : Array(this.positions),
    };
  }

  onReset() {
    this.setState(this.initialState());
  }

  onPut(args = 0) {
    let position  = args;
    let remaining = this.state.remaining;
    let value     = remaining.shift();

    // It's possible to pass [square, value] to args. This comes for free
    // with 'alt' and its convenient for testing purposes.
    if (Array.isArray(args)) {
      position = args[0];
      value    = args[1];
    }

    // Game is finished when there's no remaining moves
    let finished = remaining.length === 0;

    // Update square
    let squares = this.state.squares;
    let square  = new Square(squares[position]);
    let combos  = Array(this.positions);
    combos[position] = square.add(value);

    let score   = this.state.score + square.score;
    squares[position] = square.value;

    this.setState({ finished, remaining, squares, score, combos });
  }
}

export default Alt.createStore(GameStore, 'GameStore');
