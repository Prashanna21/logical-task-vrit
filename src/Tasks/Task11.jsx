import React, { useRef, useState } from "react";

function Task11() {
  const inputRef = useRef(null);
  const [nonRepeat, setNonRepeat] = useState(null);

  const countFunc = (arr) => {
    const charCount = {};

    for (let i = 0; i < arr.length; i++) {
      if (charCount.hasOwnProperty(arr[i])) {
        charCount[arr[i]] += 1;
      } else {
        charCount[arr[i]] = 1;
      }
    }

    FindOutFirstNonRepeating(charCount);
  };

  const FindOutFirstNonRepeating = (obj) => {
    const inArray = Object.entries(obj);

    for (let i = 0; i < inArray.length; i++) {
      let sepArray = inArray[i];
      if (sepArray[1] === 1) {
        setNonRepeat(sepArray[0]);
        return;
      }
    }
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
          placeholder="Enter The String to get non repeating"
          ref={inputRef}
        />
        <button
          className="bg-slate-500 rounded-3xl px-2 py-2 text-white"
          onClick={handleClick}
        >
          Find out non repeating{" "}
        </button>
      </div>

      {nonRepeat && (
        <div className="text-xl">Which doesnot repeat is: {nonRepeat}</div>
      )}
    </div>
  );
}

export default Task11;
