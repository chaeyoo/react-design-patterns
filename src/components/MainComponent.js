import { Link } from "react-router-dom";

export default function MainComponent() {
  return (
    <div>
      <h1>Design Pattern</h1>
      <p>This is the main component</p>
      <Link to="/component">Component Pattern</Link>
      <br />
      <Link to="/hoc">HOC Pattern</Link>
      <br />
      <Link to="/render">Render Prop Pattern</Link>
      <br />
      <Link to="/hooks">Hooks Pattern</Link>
      <br />
      <Link to="/compound">Compound Component Pattern</Link>
      <br />
      <Link to="/provider">Provider Pattern</Link>
      <br />
      <Link to="/container-presentational">
        Container-Presentational Pattern
      </Link>
      <br />
      <Link to="/custom-hook">Custom Hook Pattern</Link>
      <br />
      <Link to="/controlled">Controlled Pattern</Link>
    </div>
  );
}
