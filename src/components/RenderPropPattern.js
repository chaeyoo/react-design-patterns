import React from "react";

// 렌더 프롭은 컴포넌트 간에 값을 공유하는 기법입니다. 함수를 prop으로 전달하여 컴포넌트의 렌더링을 제어
class Mouse extends React.Component {
  state = { x: 0, y: 0 };

  handleMouseMove = (event) => {
    this.setState({
      x: event.clientX,
      y: event.clientY,
    });
  };

  render() {
    return (
      <div style={{ height: "100px" }} onMouseMove={this.handleMouseMove}>
        {this.props.render(this.state)}
      </div>
    );
  }
}

function RenderPropPattern() {
  return (
    <div>
      <h3>Render Prop Pattern</h3>
      <Mouse
        render={({ x, y }) => (
          <p>
            The mouse position is ({x}, {y})
          </p>
        )}
      />
    </div>
  );
}

export default RenderPropPattern;
