import React, { useState } from "react";
import keyboardMap from "./lib/keyboard-map";

function App() {
  const [keyboardKey, setKeyboardKey] = useState("");

  document.addEventListener("keydown", (e) => {
    setKeyboardKey(e.key);
  });

  const renderKeyDictionary = () => {
    if (!keyboardMap[keyboardKey]) {
      return (
        <span className="flex items-center">
          <strong className="text-xl mr-2 border border-emerald-500 py-1 px-3 rounded">
            {keyboardKey}
          </strong>
          does not have an associated vim command
        </span>
      );
    }

    return (
      <span className="flex items-center">
        <strong className="text-xl mr-2 border border-emerald-500 py-1 px-3 rounded">
          {keyboardKey}
        </strong>
        {keyboardMap[keyboardKey]}
      </span>
    );
  };

  return (
    <div className="App h-full text-light-50 flex items-center justify-center">
      {keyboardKey.length > 0 ? (
        <div>{renderKeyDictionary()}</div>
      ) : (
        <div>
          <h1 className="text-5xl mb-4">
            <span className="text-emerald-500">Vim</span>
            <span>mer</span>
          </h1>
          <p>Press a keyboard key to find what it maps to in Vim.</p>
        </div>
      )}
    </div>
  );
}

export default App;
