import React from 'react';

export default React.createClass({
  render: function() {
    return(
      <div>
        <p>Score: {this.props.score}</p>
        <p>{this.props.combo}</p>
      </div>
    );
  },
});
