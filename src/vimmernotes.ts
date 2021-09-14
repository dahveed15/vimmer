/*
	keyQueue = []

	for every key press:
		- √ filter non-correct keys (i.e, meta, backspace, command, shift) 
		- push it up to the keyQueue if the keyQueue has less than or equal to 3 keys
	  
		- keyQueue gets joined by `,` and is used to filter the keyboardMap

	√ if backspace is pressed:
		- pop out the last item in the keyQueue

	keyQueue items is mapped to display in the UI

  Add ArrowKeyDirections and Escape to KeyboardMap
*/

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
