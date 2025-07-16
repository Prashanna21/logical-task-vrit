import React, { useRef, useState } from "react";

//Note by dev: api key should always be on .env file and imported so it doesn't get uploaded in github but this is for practice purpose only
const apiKey = "zZvfBj+B4WHs8OWDj+JLvw==a2B0E2Q3IIWeloAz";

const apiCall = async (input, setData, setLoading) => {
  setLoading(true);
  const response = await fetch(
    `https://api.api-ninjas.com/v1/whois?domain=${input}`,
    {
      method: "GET",
      headers: { "X-Api-Key": "zZvfBj+B4WHs8OWDj+JLvw==a2B0E2Q3IIWeloAz" },
    }
  );

  const data = await response.json();
  setLoading(false);

  console.log(data);
  setData(data);
};

function Task12() {
  const inputRef = useRef(null);
  const [loading, setLoading] = useState(null);
  const [data, setData] = useState("");

  const handleClick = () => {
    const inputValue = inputRef.current.value;

    apiCall(inputValue, setData, setLoading);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-2">
      <div className="flex gap-5">
        <input
          className="w-80 border-slate-500 border-2 rounded-2xl px-2 py-2"
          placeholder="Enter the url (eg. google.com)"
          ref={inputRef}
        />
        <button
          className="bg-slate-500 rounded-3xl px-2 py-2 text-white"
          onClick={handleClick}
        >
          Find Url Info{" "}
        </button>
      </div>

      {loading && <div> loading... </div>}

      {data && (
        <div className="text-xl">
          <div>Domain name: {data.domain_name}</div>
          <div>Domain Registar: {data.registrar}</div>
          <div>Domain whoisserver: {data.whois_server}</div>
        </div>
      )}
    </div>
  );
}

export default Task12;
