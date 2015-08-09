import React from 'react';

export default React.createClass({
  render: function() {
    return(
      <div>
        <p>Remaining moves: {this.props.moves.length}</p>
        <p>Next move: {this.props.moves[0]}</p>
      </div>
    );
  },
});
