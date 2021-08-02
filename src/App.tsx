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
			return <p>{keyboardKey} does not have an associated vim command</p>;
		}

		return (
			<p>
				{keyboardKey}: {keyboardMap[keyboardKey]}
			</p>
		);
	};

	return <div className="App">{keyboardKey && renderKeyDictionary()}</div>;
}

export default App;
