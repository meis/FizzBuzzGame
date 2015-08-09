import React  from 'react';
import Square from './Square';

export default React.createClass({
  render: function() {
    let squares = this.props.squares.map((s, idx) => {
      return (
        <Square value={s} key={idx} idx={idx}/>
      );
    });

    let style = {
      background: '#ff7260',
      borderRadius: '6px',
      padding: '10px 10px 0 0',
      marginTop: '10px',
      MozUserSelect: 'none',
      msUserSelect: 'none',
      WebkitUserSelect: 'none',
      userSelect: 'none',
    };

    return(
      <div style={style}>
        {squares}
      </div>
    );
  },
});
