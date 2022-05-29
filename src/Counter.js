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
          /* 
          onClick={() => {
            // setState 메서드 사용시 state 값이 바로 바뀌지 않으므로, setState 메서드를 두 번 호출해도 1만 증가함 
            //this.setState({ number: number + 1 });
            //this.setState({ number: this.state.number + 1 });
          }}
          */
          /*
          onClick={() => {
            // setState 메서드에 함수를 전달하여 1씩 증가하는 문제 해결
            this.setState((prevState) => {
              return {
                number: prevState.number + 1,
              };
            });

            this.setState((prevState) => ({
              number: prevState.number + 1,
            }));
          }}
          */
          onClick={() => {
            // setState의 두 번째 파라미터로 콜백 함수를 등록하면, setState로 값이 업데이트된 이후에 콜백이 호출됨
            this.setState({ number: number + 1 }, () => {
              console.log('방금 setState가 호출되었습니다.');
              console.log(this.state);
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
