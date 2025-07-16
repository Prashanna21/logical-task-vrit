import React, { useRef, useState } from "react";

//Note by dev: api key should always be on .env file and imported so it doesn't get uploaded in github but this is for practice purpose only
const apiKey = "zZvfBj+B4WHs8OWDj+JLvw==a2B0E2Q3IIWeloAz";

const apiCall = async (input, setData, setLoading, isOnLimit, setDebounce) => {
  if (!isOnLimit) {
    setDebounce();
    setLoading(true);
    const response = await fetch(
      `https://api.api-ninjas.com/v1/nutrition?query=1lb ${input}`,
      {
        method: "GET",
        headers: { "X-Api-Key": "zZvfBj+B4WHs8OWDj+JLvw==a2B0E2Q3IIWeloAz" },
      }
    );
    const data = await response.json();
    setLoading(false);

    console.log(data);
    setData(data[0]);
  }
};

function Task6() {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState("");

  const [isOnLimit, setIsOnLimit] = useState(false);

  const handleClick = () => {
    const inputValue = inputRef.current.value;

    apiCall(inputValue, setData, setLoading, isOnLimit, setDebounce);
  };

  const setDebounce = () => {
    console.log("limit in action");
    setIsOnLimit(true);

    setTimeout(() => {
      console.log("limit ended");
      setIsOnLimit(false);
    }, 5000);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Search eg(mango) only one"
          ref={inputRef}
        />
        <button
          className={`bg-slate-500 rounded-3xl px-2 py-2 text-white ${
            isOnLimit ? " " : "cursor-pointer"
          }`}
          onClick={() => {
            if (!isOnLimit) {
              handleClick();
            }
          }}
        >
          {isOnLimit ? "Limit wait" : "Search nutrition"}
        </button>
      </div>

      {loading && <div> loading... </div>}

      {data && (
        <div className="text-xl">
          <div>Name: {data.name}</div>
          <div> Calories : {data.calories} </div>
          <div> Service Size (g) : {data.serving_size_g} </div>
          <div> "fat total (g)": {data.fat_total_g} </div>
        </div>
      )}
    </div>
  );
}

export default Task6;
