import logo from './logo.svg';
import './App.css';

function App() {
  const name = '리액트';
  return (
    <>
      {/* JSX 내부에서 주석 사용 */}
      <div
        className="react"
        // 시작 태그를 여러 줄로 작성하였을 때, 태그 안에서 주석 사용이 가능하다.
      >
        {name}
      </div>
      // 이런 주석은 페이지에 나타난다. /* 이런 주석은 페이지에 나타난다. */
      {/* 주석 테스트 */}
      <input />
    </>
  );
}

export default App;
