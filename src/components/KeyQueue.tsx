import * as React from "react";

interface KeyQueueProps {
  items: string[];
}

const KeyQueue: React.FC<KeyQueueProps> = ({ items }) => {
  return (
    <div className="text-6xl flex">
      {items.map((item) => (
        <span className="inline-flex items-center place-content-center mx-2 w-20 h-20 bg-emerald-500 border border-emerald-500 rounded">
          {item}
        </span>
      ))}
    </div>
  );
};

export default KeyQueue;
