import "./App.css";
import Task2 from "./Tasks/Task2";
import Task4 from "./Tasks/Task4";
import Task1 from "./Tasks/Task1";
import Task8 from "./Tasks/Task8";
import Task10 from "./Tasks/Task10";
import Task12 from "./Tasks/Task12";
import Task3 from "./Tasks/Task3";
import Task5 from "./Tasks/Task5";
import Task9 from "./Tasks/Task9";
import Task11 from "./Tasks/Task11";
import Task7 from "./Tasks/Task7";
import Task6 from "./Tasks/Task6";

function App() {
  return (
    <div className="flex flex-col">
      <h1 className="font-bold text-2xl text-center mt-10">
        Task 1: Reverse String
      </h1>
      <Task1 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 2 : Find Largest Number
      </h1>
      <Task2 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 3: Print N number
      </h1>
      <Task3 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 4: Print Sum Of Array
      </h1>
      <Task4 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 5: Use State
      </h1>
      <Task5 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 6 : Debounce Function
      </h1>
      <Task6 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 7: Flat Array
      </h1>
      <Task7 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 8: Palindrome Finder
      </h1>
      <Task8 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 9 : Frequency of character
      </h1>
      <Task9 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 10: Controlled Vs Un Controlled{" "}
      </h1>
      <Task10 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 11: Get First Non Repeating
      </h1>
      <Task11 />

      <h1 className="font-bold text-2xl text-center mt-10">
        Task 12: Api Call
      </h1>
      <Task12 />
    </div>
  );
}

export default App;
