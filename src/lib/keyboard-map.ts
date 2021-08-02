interface KeyboardMap {
	[keyCode: string]: string;
}

const keyboardMap: KeyboardMap = {
	h: "move cursor left",
	j: "move cursor down",
	k: "move cursor up",
	l: "move cursor right",
};

export default keyboardMap;
