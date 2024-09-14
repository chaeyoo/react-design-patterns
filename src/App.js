import "./App.css";
import { Route, Routes } from "react-router-dom";
import ComponentPattern from "./components/ComponentPattern";
import HOCPattern from "./components/HOCPattern";
import RenderPropPattern from "./components/RenderPropPattern";
import HooksPattern from "./components/HooksPattern";
import CompoundComponentPattern from "./components/CompoundComponentPattern";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainComponent />} />
      <Route path="/component" element={<ComponentPattern />} />
      <Route path="/hoc" element={<HOCPattern />} />
      <Route path="/render" element={<RenderPropPattern />} />
      <Route path="/hooks" element={<HooksPattern />} />
      <Route path="/compound" element={<CompoundComponentPattern />} />
    </Routes>
  );
}

export default App;
