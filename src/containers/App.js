import React, { useState } from "react";
import "../containers/App.css";
import Display from "../components/Display";
import Keypad from "../components/Keypad";

function App() {
  const [screen, setScreen] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);

  function getOperands(e) {
    setScreen(screen + e.target.value);
    setIsEmpty(false);
  }

  function clearDisplay() {
    if (!isEmpty) {
      setScreen("");
      setIsEmpty(true);
    } else {
      alert("Nothing to clear!");
    }
  }

  function evaluate() {
    try {
      let result = eval(screen);
      setScreen(result);
      setIsEmpty(false);
    } catch (error) {
      alert(error);
      clearDisplay();
    }
  }

  return (
    <div className="App">
      <h1>React JS Calculator</h1>
      <div className="calculator">
        <Display screen_value={screen} />
        <Keypad operand={getOperands} clear={clearDisplay} result={evaluate} />
      </div>
    </div>
  );
}

export default App;
