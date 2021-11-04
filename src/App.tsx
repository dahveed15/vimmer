import React, { useState, useEffect } from "react";
import KeyQueue from "./components/KeyQueue";
import TitleScreen from "./components/TitleScreen";

export default function App() {
  const [keyItems, setKeyItems] = useState<string[] | []>([]);
  const invalidKeys = [
    "Meta",
    "Shift",
    "CapsLock",
    "Tab",
    "Enter",
    "Alt",
    "Control",
    ";",
  ];

  // TODO: This seems like a good function to convert to a hook.
  const handleKeyToQueue = (event: KeyboardEvent) => {
    if (event.key === "Backspace") {
      return setKeyItems((prevState) => prevState.slice(0, -1));
    }

    if (invalidKeys.includes(event.key)) {
      return;
    }

    setKeyItems((prevState) => {
      if (prevState.length === 3) {
        return [...prevState.slice(1), event.key];
      }

      return [...prevState, event.key];
    });
  };

  useEffect(() => {
    document.addEventListener("keydown", (e) => handleKeyToQueue(e));

    return () => {
      document.removeEventListener("keydown", (e) => handleKeyToQueue(e));
    };
  }, []);

  return (
    <div className="App h-full text-light-50 flex items-center justify-center">
      <div className="flex-row">
        {keyItems.length > 0 ? (
          <>
            <KeyQueue items={keyItems} />
            <p className="mt-4">Press backspace to undo.</p>
          </>
        ) : (
          <TitleScreen />
        )}
      </div>
    </div>
  );
}
