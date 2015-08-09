import React from 'react';

export default React.createClass({
  render: function() {
    return(
      <div id="scoreBoard">
        <div className="current">
          <span>Current</span>
          <span className="value">{this.props.remaining[0] || String.fromCharCode(160)}</span>
        </div>
        <div className="remaining">
          <span>Remaining</span>
          <span className="value">{this.props.remaining.length}</span>
        </div>
        <div className="score">
          <span>Score</span>
          <span className="value">{this.props.score}</span>
        </div>
      </div>
    );
  },
});

