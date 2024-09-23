import useWindowSize from "../../hooks/useWindowSize";

export default function ResponsiveComponent() {
  const size = useWindowSize();

  return (
    <div style={{ fontSize: size.width > 768 ? "18px" : "14px" }}>
      This text changes size based on the window width.
    </div>
  );
}
