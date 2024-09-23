import useWindowSize from "../../hooks/useWindowSize";

export default function WindowSizeDisplay() {
  const size = useWindowSize();

  return (
    <div>
      <h2>Window Size:</h2>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}
