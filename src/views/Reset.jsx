import React       from 'react/addons';
import GameActions from '../actions/GameActions';

export default React.createClass({
  render: function() {
    return(
      <div id="reset" onClick={this.handleClick}>
        New Game
      </div>
    );
  },

  handleClick: function(ev) {
    GameActions.reset();
  },
});
