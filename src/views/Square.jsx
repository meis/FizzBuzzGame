import React       from 'react';
import GameActions from '../actions/GameActions';

export default React.createClass({
  render: function() {
    return(
      <div onClick={this.handleClick}>
        {this.props.value}
      </div>
    );
  },

  handleClick: function(ev) {
    GameActions.put(this.props.idx);
  },
});
