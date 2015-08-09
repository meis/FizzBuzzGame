import React  from 'react';
import Square from './Square';

export default React.createClass({
  render: function() {
    let squares = this.props.squares.map((s, idx) => {
      return (
        <Square value={s} key={idx} idx={idx} combo={this.props.combos[idx]} />
      );
    });

    return(
      <div id="squares">
        {squares}
        {this.gameOver()}
      </div>
    );
  },

  gameOver: function() {
    if (this.props.finished) {
      return <div id="game-over"><div className="text">Game Over!</div></div>
    }
    else {
      return '';
    }
  },
});
