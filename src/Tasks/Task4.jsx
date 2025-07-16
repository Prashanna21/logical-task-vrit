import React, { useRef, useState } from "react";

function Task4() {
  const inputRef = useRef(null);
  const [sum, setSum] = useState(null);

  const findSum = (arr) => {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    return sum;
  };

  const handleClick = () => {
    const inputValue = inputRef.current.value.split(",").map(Number);

    console.log(inputValue);
    setSum(findSum(inputValue));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Enter the numbers seperated by comma"
          ref={inputRef}
        />
        <button
          className="bg-slate-500 rounded-3xl px-2 py-2 text-white"
          onClick={handleClick}
        >
          Find The Sum of The Array{" "}
        </button>
      </div>

      {sum && <div className="text-xl">The sum is:{sum}</div>}
    </div>
  );
}

export default Task4;
