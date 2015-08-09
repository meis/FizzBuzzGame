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
    let bodyStyle = {
      backgroundColor: '#fff5c3',
      fontFamily: "Clear Sans, Helvetica Neue, Arial, sans-serif",
      color: '#505050',
    };

    let style = {
      width: '490px',
      margin: '0 auto',
    };

    return(
      <body style={bodyStyle}>
        <div style={style}>
          <Title />
          <Scoreboard
            score={this.props.score}
            combo={this.props.combo}
            remaining={this.props.remaining}
          />
          <Squares
            remaining={this.props.remaining}
            finished ={this.props.finished}
            squares  ={this.props.squares}
          />
        </div>
      </body>
    );
  }
}

export default connectToStores(FizzBuzzGame);
