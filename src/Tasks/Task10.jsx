import React, { useRef, useState } from "react";
import Task1 from "./Task1";

function Task10() {
  const inputRef = useRef(null);

  const [unControlledValue, setUnControlledValue] = useState("");
  const [controlledValue, setControlledValue] = useState("");

  const handleClickUnControlled = () => {
    const inputValue = inputRef.current.value;
    setUnControlledValue(inputValue);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Enter the value in uncontrolled input"
          ref={inputRef}
        />
        <button
          className="bg-slate-500 rounded-3xl px-2 py-2 text-white"
          onClick={handleClickUnControlled}
        >
          Find Controlled Output{" "}
        </button>
      </div>

      {unControlledValue && (
        <div className="text-xl">
          The value in uncontrolled input is : {unControlledValue}
        </div>
      )}

      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Enter the value in uncontrolled input"
          value={controlledValue}
          onChange={(e) => setControlledValue(e.target.value)}
        />
      </div>

      {controlledValue && (
        <div className="text-xl">
          The value in controlled input is : {controlledValue}
        </div>
      )}
    </div>
  );
}

export default Task10;
