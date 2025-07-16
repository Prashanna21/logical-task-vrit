import React, { useRef, useState } from "react";

function Task1() {
  const inputRef = useRef(null);
  const [reversedString, setReversedString] = useState(null);

  const findReversed = (arr) => {
    let reversed = "";

    for (let i = arr.length - 1; i >= 0; i--) {
      reversed += arr[i];
    }

    return reversed;
  };

  console.log(findReversed("Bibek"));

  const handleClick = () => {
    const inputValue = inputRef.current.value;

    console.log(inputValue);
    setReversedString(findReversed(inputValue));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Enter The String to be reversed"
          ref={inputRef}
        />
        <button
          className="bg-slate-500 rounded-3xl px-2 py-2 text-white"
          onClick={handleClick}
        >
          The reversed String{" "}
        </button>
      </div>

      {reversedString && (
        <div className="text-xl">The sum is: {reversedString}</div>
      )}
    </div>
  );
}

export default Task1;
