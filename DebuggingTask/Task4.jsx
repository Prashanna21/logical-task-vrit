const [count, setCount] = useState(0);
function increment() {
  setCount(count++);
}

//it is incorrect becasue you are directly trying to add a usestate hook variable which gives you cannot change a "const"

//a solution for this can be

const [count, setCount] = useState(0);
function increment() {
  setCount((prev) => (prev += 1));
}

// here prev is the prevous value of the state given so we can update it like this solving the problem
