import React from 'react';

class App extends React.Component {
  state = {
    name: 'john',
  };
  render() {
    return (
      <h1>Welcome {this.state.name}!</h1>
    );
  }
}

export default App;
