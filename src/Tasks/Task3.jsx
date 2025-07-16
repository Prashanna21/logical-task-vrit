import React, { useRef, useState } from "react";

function Task3() {
  const inputRef = useRef(null);
  const [numbers, setNumbers] = useState([]);

  const printNumber = (num) => {
    const tempNum = [];
    for (let i = 1; i <= num; i++) {
      tempNum.push(i);
    }
    setNumbers(tempNum);
    return;
  };

  const handleClick = () => {
    const inputValue = inputRef.current.value;

    printNumber(Number(inputValue));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Enter the number upto which you want to print (eg: 100}"
          ref={inputRef}
        />
        <button
          className="bg-slate-500 rounded-3xl px-2 py-2 text-white"
          onClick={handleClick}
        >
          Print Numbers{" "}
        </button>
      </div>

      {numbers.length != 0 && (
        <div className="text-xl">
          Numbers:{" "}
          {numbers?.map((num) => (
            <div> {num} </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Task3;
