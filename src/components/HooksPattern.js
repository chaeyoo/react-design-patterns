import React, { useState, useEffect } from "react";
// 훅은 함수형 컴포넌트에서 상태와 생명주기 기능을 사용할 수 있게 해주는 패턴
function HooksPattern() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <h3>Hooks Pattern</h3>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default HooksPattern;
