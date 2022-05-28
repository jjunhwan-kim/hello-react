import React, { Component } from 'react';

class Counter extends Component {
  state = {
    number: 0,
    fixedNumber: 0,
  };
  /*
  constructor(props) {
    super(props); // 생성자 사용시 반드시 호출해야 함
    // state의 초기값 설정
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }
  */

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값: {fixedNumber}</h2>
        <button
          onClick={() => {
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
