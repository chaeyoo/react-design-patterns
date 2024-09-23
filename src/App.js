import "./App.css";
import { Route, Routes } from "react-router-dom";
import ComponentPattern from "./components/ComponentPattern";
import HOCPattern from "./components/HOCPattern";
import RenderPropPattern from "./components/RenderPropPattern";
import HooksPattern from "./components/HooksPattern";
import CompoundComponentPattern from "./components/CompoundComponentPattern";
import MainComponent from "./components/MainComponent";
import ThemedButton from "./components/ProviderPattern";
import ThemeProvider from "./provider/themeProvider";
import UserListContainer from "./components/ContainerPresentationalPattern";
import CustomHookPattern from "./components/CustomHookPattern";
import ControlledForm from "./components/ControlledComponentPattern";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/component" element={<ComponentPattern />} />
        <Route path="/hoc" element={<HOCPattern />} />
        <Route path="/render" element={<RenderPropPattern />} />
        <Route path="/hooks" element={<HooksPattern />} />
        <Route path="/compound" element={<CompoundComponentPattern />} />
        <Route path="/provider" element={<ThemedButton />} />
        <Route
          path="/container-presentational"
          element={<UserListContainer />}
        />
        <Route path="/custom-hook" element={<CustomHookPattern />} />
        <Route path="/controlled" element={<ControlledForm />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
