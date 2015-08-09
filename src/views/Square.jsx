import React       from 'react';
import GameActions from '../actions/GameActions';

export default React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.combo || nextProps.value != this.props.value;
  },

  render: function() {
    return(
      <div className='square' onClick={this.handleClick}>
        <p>{this.props.value}</p>{this.props.combo}
      </div>
    );
  },

  handleClick: function(ev) {
    GameActions.put(this.props.idx);
  },
});
