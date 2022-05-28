import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
  render() {
    return (
      <>
        <MyComponent name={'react'} favoriteNumber={7}>
          {'3'}
        </MyComponent>
      </>
    );
  }
}

export default App;
