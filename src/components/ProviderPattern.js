import { useContext } from "react";
import { ThemeContext } from "../provider/themeProvider";

export default function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div>Provider Patter</div>
      <p>
        Provider Pattern은 React 애플리케이션에서 전역 상태나 설정을 관리하고
        공유하는 데 사용
      </p>
      <ul>
        <li>TContext API를 사용하여 구현</li>
        <li>컴포넌트 트리의 상위 레벨에서 데이터를 제공</li>
        <li>하위 컴포넌트들은 props drilling 없이 필요한 데이터에 접근 가능</li>
        <li>테마, 인증 상태, 언어 설정 등 전역적으로 관리해야 하는 상태에 유용</li>
      </ul>
      <button
        onClick={toggleTheme}
        style={{
          backgroundColor: theme === "light" ? "#fff" : "#333",
          color: theme === "light" ? "#333" : "#fff",
        }}
      >
        Toggle Theme
      </button>
    </>
  );
}
