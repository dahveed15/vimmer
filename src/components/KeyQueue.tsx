import * as React from "react";

interface KeyQueueProps {
	items: string[];
}

const KeyQueue: React.FC<KeyQueueProps> = ({ items }) => {
	return (
		<div>
			{items.map((item) => (
				<h1 className="inline-block mx-2">{item}</h1>
			))}
		</div>
	);
};

export default KeyQueue;
