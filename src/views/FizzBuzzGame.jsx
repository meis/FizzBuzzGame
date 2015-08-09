import React     from 'react';
import Remaining from './Remaining';
import Squares   from './Squares';
import Score     from './Score';
import GameStore from '../stores/GameStore';
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
      <div>
        <h1>FizzBuzz Game</h1>
        <Remaining moves={this.props.remaining}/>
        <Squares
          remaining={this.props.remaining}
          finished ={this.props.finished}
          squares  ={this.props.squares}
        />
        <Score score={this.props.score} combo={this.props.combo} />
      </div>
    );
  }
}

export default connectToStores(FizzBuzzGame);
