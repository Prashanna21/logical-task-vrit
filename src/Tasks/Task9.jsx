import React, { useRef, useState } from "react";

function Task9() {
  const inputRef = useRef(null);
  const [count, setCount] = useState(null);
  const [Data, setData] = useState(null);

  const countFunc = (arr) => {
    const charCount = {};

    for (let i = 0; i < arr.length; i++) {
      if (charCount.hasOwnProperty(arr[i])) {
        charCount[arr[i]] += 1;
      } else {
        charCount[arr[i]] = 1;
      }
    }
    console.log("Task 9 Output: ", charCount);

    // setCount(Object.entries(charCount));

    // setData(tempData);
  };

  const handleClick = () => {
    const inputValue = inputRef.current.value;

    countFunc(inputValue);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Enter The String to get number of character"
          ref={inputRef}
        />
        <button
          className="bg-slate-500 rounded-3xl px-2 py-2 text-white"
          onClick={handleClick}
        >
          Find out number of char{" "}
        </button>
      </div>

      <div>Check console for answer</div>

      {/* {count && (
        <div className="text-xl">
          Each Count:{" "}
          {count?.map((arr, idx) => {
            <div>
              {" "}
              {arr[0]} : {arr[1]}{" "}
            </div>;
          })}
        </div>
      )}

      {Data && Data} */}
    </div>
  );
}

export default Task9;
