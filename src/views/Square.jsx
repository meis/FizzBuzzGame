import React       from 'react';
import GameActions from '../actions/GameActions';

export default React.createClass({
  render: function() {
    let style = {
      display: 'inline-block',
      backgroundColor: '#eee4da',
      height: '150px',
      width: '150px',
      margin: '0 0 10px 10px',
      cursor: 'pointer',
      lineHeight: '45px',
      textAlign: 'center',
      fontSize: '55px',
      fontWeight: 'bold',
    };

    return(
      <div onClick={this.handleClick} style={style}>
        <p>{this.props.value}</p>
      </div>
    );
  },

  handleClick: function(ev) {
    GameActions.put(this.props.idx);
  },
});
