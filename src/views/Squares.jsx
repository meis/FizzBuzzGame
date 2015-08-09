import React  from 'react';
import Square from './Square';

export default React.createClass({
  render: function() {
    var squares = this.props.squares.map((s, idx) => {
      return (
        <Square value={s} key={idx} idx={idx}/>
      );
    });

    return(
      <div>
        {squares}
      </div>
    );
  },
});
