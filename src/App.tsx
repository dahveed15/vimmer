import React, { useState } from "react";
import "./App.css";
import keyboardMap from "./lib/keyboard-map";

function App() {
  const [keyboardKey, setKeyboardKey] = useState("");

  document.addEventListener("keydown", (e) => {
    setKeyboardKey(e.key);
  });

  const renderKeyDictionary = () => {
    if (!keyboardMap[keyboardKey]) {
      return <span>{keyboardKey} does not have an associated vim command</span>;
    }

    return (
      <span>
        {keyboardKey}: {keyboardMap[keyboardKey]}
      </span>
    );
  };

  return (
    <div className="App h-full text-light-50 flex items-center justify-center">
      <p className="text-5xl">{keyboardKey && renderKeyDictionary()}</p>
    </div>
  );
}

export default App;
