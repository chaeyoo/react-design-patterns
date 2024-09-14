import React, { createContext, useContext, useState } from "react";

const ToggleContext = createContext();

function Toggle({ children }) {
  const [on, setOn] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <ToggleContext.Provider value={{ on, toggle }}>
      {children}
    </ToggleContext.Provider>
  );
}

function ToggleOn({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? children : null;
}

function ToggleOff({ children }) {
  const { on } = useContext(ToggleContext);
  return on ? null : children;
}

function ToggleButton() {
  const { on, toggle } = useContext(ToggleContext);
  return <button onClick={toggle}>{on ? "ON" : "OFF"}</button>;
}

Toggle.On = ToggleOn;
Toggle.Off = ToggleOff;
Toggle.Button = ToggleButton;

function CompoundComponentPattern() {
  return (
    <div>
      <h3>Compound Component Pattern</h3>
      <Toggle>
        <Toggle.On>The button is on</Toggle.On>
        <Toggle.Off>The button is off</Toggle.Off>
        <Toggle.Button />
      </Toggle>
    </div>
  );
}

export default CompoundComponentPattern;
