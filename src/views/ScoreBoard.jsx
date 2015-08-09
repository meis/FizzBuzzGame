import React from 'react';

export default React.createClass({
  render: function() {
    let wrapperStyle = {
      display: 'inline-block',
      width: '150px',
      margin: '0 0 10px 10px',
      textAlign: 'center',
    };

    let valueStyle = {
      display: 'block',
      fontWeight: 'bold',
      fontSize: '32px',
    };

    return(
      <div>
        <div style={wrapperStyle}>
          <span>Next</span>
          <span style={valueStyle}>{this.props.remaining[0] || ''}</span>
        </div>
        <div style={wrapperStyle}>
          <span>Remaining</span>
          <span style={valueStyle}>{this.props.remaining.length}</span>
        </div>
        <div style={wrapperStyle}>
          <span>Score</span>
          <span style={valueStyle}>{this.props.score}</span>
        </div>
      </div>
    );
  },
});

