import React     from 'react';
import Remaining from './Remaining';
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
      </div>
    );
  }
}

export default connectToStores(FizzBuzzGame);
