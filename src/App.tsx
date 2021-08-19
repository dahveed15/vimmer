import React, { useState, useEffect } from "react";
import keyboardMap from "./lib/keyboard-map";

function App() {
	const [commandQueue, setCommandQueue] = useState<Array<string | null>>([]);
	const [loaded, setLoaded] = useState<boolean>(false);
	const [chainedCommands, setChainedCommands] = useState<string | null>();

	useEffect(() => {
		document.addEventListener("keydown", (e) => {
			setCommandQueue((prevState) => {
				if (prevState.length > 3) {
					return [e.key];
				}
				return [...prevState, e.key];
			});
		});

		return () => {
			document.removeEventListener("keydown", () => {});
		};
	}, []);

	useEffect(() => {
		setChainedCommands(commandQueue.join(""));

		return () => {
			setChainedCommands(null);
		};
	}, [commandQueue]);

	const commandDescriptions = () => {
		return Object.entries(keyboardMap)
			.filter(([key]) => key.startsWith(chainedCommands))
			.map(([key, definition]) => ({ key, definition }));
	};

	const renderTitleScreen = () => (
		<div>
			<h1 className="text-5xl mb-4">
				<span className="text-emerald-500">Vim</span>
				<span>mer</span>
			</h1>
			<p>Press a keyboard key to find what it maps to in Vim.</p>
		</div>
	);

	const renderKeyDictionary = () => {
		return commandDescriptions().map(({ key, definition }) => (
			<div key={key} className="block w-full text-center">
				<span className="mb-4">
					<strong className="text-xl mr-2 border border-emerald-500 py-1 px-3 rounded">
						{key}
					</strong>
					{definition}
				</span>
			</div>
		));
	};
	return (
		<div className="App w-full text-light-50">
			<div className="border text-center mb-10 py-10">{chainedCommands}</div>
			{commandQueue.length > 0 ? renderKeyDictionary() : renderTitleScreen()}
		</div>
	);
}

export default App;
