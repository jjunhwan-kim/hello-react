import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyClassComponent extends Component {
  static defaultProps = {
    name: '기본 이름',
    children: '기본 children 이름',
    //favoriteNumber: 1,
  };

  static propTypes = {
    name: PropTypes.string,
    children: PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired,
  };

  render() {
    const { name, favoriteNumber, children } = this.props; // 구조 분해 할당(비구조화 할당)
    return (
      <div>
        안녕하세요, 제 이름은 {name}입니다.
        <br />
        children 값은 {children}입니다.
        <br />
        제가 좋아하는 숫자는 {favoriteNumber}입니다.
      </div>
    );
  }
}

// 함수 컴포넌트와 마찬가지로 이 방법도 가능
/* 
MyClassComponent.defaultProps = {
  name: '기본 이름',
  children: '기본 children 이름',
  //favoriteNumber: 1,
};

MyClassComponent.propTypes = {
  name: PropTypes.string,
  children: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
};
 */
export default MyClassComponent;
