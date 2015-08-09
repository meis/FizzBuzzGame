import React       from 'react/addons';
import GameActions from '../actions/GameActions';

export default React.createClass({
  shouldComponentUpdate: function(nextProps, nextState) {
    return nextProps.combo || nextProps.value != this.props.value;
  },

  render: function() {
    let ReactCSSTransitionGroup = React.addons.CSSTransitionGroup;
    return(
      <div className='square' onClick={this.handleClick}>
        <span className='value'>{this.props.value}</span>
        <ReactCSSTransitionGroup transitionName="blink">
          { this.combo() }
        </ReactCSSTransitionGroup>
      </div>
    );
  },

  combo: function() {
    if ( this.props.combo == 'fizz' ) {
      return <span key='blink' className="combo"><span className="value">Fizz!</span></span>
    }
    if ( this.props.combo == 'buzz' ) {
      return <span key='blink' className="combo"><span className="value">Buzz!</span></span>
    }
    if ( this.props.combo == 'fizzbuzz' ) {
      return <span key='blink' className="combo"><span className="value">FizzBuzz!</span></span>
    }
    return '';
  },

  handleClick: function(ev) {
    GameActions.put(this.props.idx);
  },
});
