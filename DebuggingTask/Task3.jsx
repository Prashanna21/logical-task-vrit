<button onClick={handleClick()}>Click</button>;

//The problem here is the handleClick is not passed or refereced but it is called hence if the code is run the handleClick function runs without click event

//There are two approach to fix it

//Approach one if there is no arguments to pass in the function
<button onClick={handleClick}>Click</button>;

//Approach two if there is arguments to pass in the function
<button onClick={() => handleClick(arg1, arg2)}>Click</button>;
