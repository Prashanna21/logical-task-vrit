import React, { useRef, useState } from "react";

function Task2() {
  const inputRef = useRef(null);
  const [largestNum, setLargestNum] = useState(null);

  const findLargestNumber = (arr) => {
    let largest = 0;

    for (let i = 0; i < arr.length; i++) {
      if (largest < arr[i]) {
        largest = arr[i];
      }
    }

    return largest;
  };

  const handleClick = () => {
    const inputValue = inputRef.current.value.split(",").map(Number);

    console.log(inputValue);
    setLargestNum(findLargestNumber(inputValue));
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
          Find The Largest Number{" "}
        </button>
      </div>

      {largestNum && (
        <div className="text-xl">Largest Number is:{largestNum}</div>
      )}
    </div>
  );
}

export default Task2;
