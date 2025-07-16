import React, { useRef, useState } from "react";

function Task8() {
  const inputRef = useRef(null);
  const [palindrome, setPalindrome] = useState(null);

  const isPalindrome = (arr) => {
    let reversed = "";

    for (let i = arr.length - 1; i >= 0; i--) {
      reversed += arr[i];
    }

    if (reversed === arr) {
      return "True";
    } else {
      return "False";
    }
  };

  const handleClick = () => {
    const inputValue = inputRef.current.value;

    console.log(inputValue);
    setPalindrome(isPalindrome(inputValue));
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Enter The Input to check palindrome"
          ref={inputRef}
        />
        <button
          className="bg-slate-500 rounded-3xl px-2 py-2 text-white"
          onClick={handleClick}
        >
          Find palindrome or not{" "}
        </button>
      </div>

      {palindrome && (
        <div className="text-xl">Is the input palindrome: {palindrome}</div>
      )}
    </div>
  );
}

export default Task8;
