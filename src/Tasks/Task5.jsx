import React, { useRef, useState } from "react";
import Task1 from "./Task1";

function Task5() {
  const inputRef = useRef(null);

  const [controlledValue, setControlledValue] = useState("");

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Enter your name"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
        />
      </div>

      {controlledValue && (
        <div className="text-xl">Your Name is : {controlledValue}</div>
      )}
    </div>
  );
}

export default Task5;
