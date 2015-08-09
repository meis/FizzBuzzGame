import Alt         from '../Alt';
import GameActions from '../actions/GameActions';
import Square      from '../models/Square';
import shuffle     from 'shuffle-array';

class GameStore {

  constructor(squares = 9) {
    this.bindActions(GameActions);

    this._squares = squares;
    this._values  = shuffle(Array.apply(0, Array(100)).map( (x, y) => { return y + 1 } ));
    this._squares = Array.apply(0, Array(squares)).map( (x) => { return new Square() } );

    this.state = {
      remaining: 100,
      nextPlay : this._values.pop(),
      finished : false,
      score    : 0,
      squares  : this.squareValues(),
    };
  }

  onPlay(square = 0) {
    this.state.remaining--;

    this.state.finished = this.state.remaining === 0;
  }

  squareValues() {
    return this._squares.map( (s) => { return s.value } );
  }
}

export default Alt.createStore(GameStore, 'GameStore');
