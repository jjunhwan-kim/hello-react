import React, { Component } from 'react';
import MyComponent from './MyComponent';
import MyClassComponent from './MyClassComponent';

class App extends Component {
  render() {
    return (
      <>
        <MyComponent name={'react'} favoriteNumber={7}>
          {'3'}
        </MyComponent>
        <br />

        <MyClassComponent></MyClassComponent>
      </>
    );
  }
}

export default App;
