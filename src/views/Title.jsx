import React from 'react';

export default React.createClass({
  render: function() {
    let titleStyle = {
      textAlign: 'center',
      marginBottom: '10px',
    };

    let subTitleStyle = {
      textAlign: 'center',
      fontWeight: 'normal',
      marginTop: '0',
      marginBottom: '50px',
    };

    return(
      <div>
        <h1 style={titleStyle}>FizzBuzz: The Game</h1>
        <h2 style={subTitleStyle}>Play like a real programmer!</h2>
      </div>
    );
  },
});

