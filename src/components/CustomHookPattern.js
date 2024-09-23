import ResponsiveComponent from "../ui/custom-hook/ResponsiveComponent";
import WindowSizeDisplay from "../ui/custom-hook/WindowSizeDisplay";

export default function CustomHookPattern() {
  return (
    <div>
      <p>
        Custom Hook Pattern은 React의 Hook 기능을 활용하여 컴포넌트 로직을
        재사용 가능한 함수로 추출하는 패턴입니다. 주요 특징은 다음과 같습니다:
        'use'로 시작하는 이름의 함수로 구현됩니다. 상태 로직, 사이드 이펙트 등을
        캡슐화합니다. 여러 컴포넌트에서 동일한 로직을 재사용할 수 있게 합니다.
        테스트와 유지보수가 용이합니다. 이 패턴의 장점은 로직의 재사용성을
        높이고, 관심사를 명확히 분리하여 코드의 가독성과 유지보수성을
        향상시킨다는 것입니다.
      </p>
      <h1>Custom Hook Pattern Example</h1>
      <WindowSizeDisplay />
      <ResponsiveComponent />
    </div>
  );
}
