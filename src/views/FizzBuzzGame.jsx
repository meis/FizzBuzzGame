import React      from 'react';
import Title      from './Title';
import Squares    from './Squares';
import Scoreboard from './ScoreBoard';
import GameStore  from '../stores/GameStore';
import connectToStores from 'alt/utils/connectToStores';

class FizzBuzzGame extends React.Component {
  static getStores() {
    return [GameStore];
  }

  static getPropsFromStores() {
    return GameStore.getState();
  }

  render() {
    return(
      <div id="gameWrapper">
        <Title />
        <Scoreboard
          score    ={this.props.score}
          remaining={this.props.remaining}
        />
        <Squares
          remaining={this.props.remaining}
          finished ={this.props.finished}
          squares  ={this.props.squares}
          combos   ={this.props.combos}
        />
      </div>
    );
  }
}

export default connectToStores(FizzBuzzGame);
