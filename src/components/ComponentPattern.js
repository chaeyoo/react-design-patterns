import React from "react";

// Functional Component
function Welcome(props) {
  return <h2>Hello, {props.name}</h2>;
}

// 1. 초기화 (constructor)
// 2. 첫 렌더링 (render)
// 3. DOM에 마운트 (componentDidMount)
// 4. 상태 변경 시 재렌더링 (render)
// 5. 업데이트 완료 (componentDidUpdate)
// 6. 컴포넌트 제거 시 정리 (componentWillUnmount)
// 7. React.Component를 상속받아 React 클래스 컴포넌트로 만듦
// 8. count라는 상태 변수를 만들고 초기값을 0으로 설정
class Counter extends React.Component {
  // 생성자
  // 컴포넌트가 초기화될 때 호출, 초기 상태를 설정하고, 필요한 바인딩을 수행
  // count와 lastUpdated 상태를 초기화
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      lastUpdated: null,
    };
    console.log("Constructor: Component is being initialized");
  }

  // 컴포넌트가 DOM에 마운트된 직후에 호출
  // 여기서는 10초마다 자동으로 카운트를 증가시키는 인터벌을 설정
  componentDidMount() {
    console.log("componentDidMount: Component has been added to the DOM");
    this.intervalId = setInterval(this.incrementAutomatic, 10000);
  }

  // 컴포넌트 업데이트 작업이 DOM에 반영된 직후에 호출
  // 이전 상태와 현재 상태를 비교하여 count가 변경되었을 때만 lastUpdated를 업데이트
  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate: Component has been updated");
    if (prevState.count !== this.state.count) {
      this.setState({ lastUpdated: new Date().toLocaleTimeString() });
    }
  }
  // 컴포넌트가 DOM에서 제거되기 직전에 호출
  // 여기서는 설정한 인터벌을 정리
  componentWillUnmount() {
    console.log(
      "componentWillUnmount: Component is about to be removed from the DOM"
    );
    clearInterval(this.intervalId);
  }

  // increment라는 화살표 함수 메서드를 정의
  // 화살표 함수를 사용함으로써 this가 항상 컴포넌트 인스턴스를 가리키도록 보장
  increment = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };
  decrement = () => {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  };
  incrementAutomatic = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  // React 컴포넌트의 필수 메서드인 render()를 정의
  render() {
    console.log("Render: Component is being rendered");
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <p>Last Updated: {this.state.lastUpdated || "Not yet updated"}</p>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

function ComponentPattern() {
  return (
    <div>
      <h3>Component Pattern</h3>
      <Welcome name="User" />
      <Counter />
    </div>
  );
}

export default ComponentPattern;
