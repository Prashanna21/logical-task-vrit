# SetUp Instruction
  -Cone The Repo Using: git clone https://github.com/Prashanna21/logical-task-vrit <br>
  -Change the directory using: cd logical-task-vrit <br>
  -Install NPM packages using: npm i <br>
  -Run The Code using: npm run dev <br>

  -All The Task Codes are in the main react site<br>
  -Debbug Part is in the logical-task-vrit/DebuggingTask


## Tasks Explained

# Task 1 - Reverse 
  First of all,  the input is taken from the user using inputRef hook which is uncontrolled way of taking input because we don't need realtime input so we chose input ref to take input. Then for loop is used to reverse the array and get the reversed string.

# Task 2 - Largest Number 
  Simple for loop is and a if statement is used to find out the largest number in the array and similar the input is taken as task 1. A variable largest is used to track the largest number and save the output.

# Task 3 - Print upto N
  Simple for loop is used upto N number to print upto N number and similar style of input from user is taken as task 1 and task 2.

# Task 4 - Sum of Array
  Simple loop is used to find the sum of array and simlilar style of input from user as task 1, 2 and 3. A sum variable is used to store the calculation.

# Task 5 - Use State
  Simple use of useState hook where there is a controlledInput and it prints out the name as the input changes.

# Task 6 - Debounce
  Used timeout function to add debounce feature but a bug that couldn't be fixed which while user was typing and limit hit the api wouldn't call as it was being time out at that time and blocked by if statement for that you have to press space or any character to get the desired output.

# Task 7 - Flat Array
  Any Dimensional array will be flatted into 1D array using the recursion fuction. Took a while to come up with the logic but is slick and clean.

# Task 8 - Palindrome
  Same Code of task 1 is reused with a additional condition function to check if the reversed string is equal to original string.

# Task 9 - Char Count
  For loop is used to loop throught the character and store into object and hasOwnProperty fuction used to check if the key is present or not if the key is present add one to it

# Task 10 - Contorlled Vs Uncontrolled
  Simple Controlled Vs Uncontrolled is shown by using input as one needs real time update without button controlled input is used while another doesn't require it so uncontrolled is used as there is button present to handle the click.

# Task 11 - Find the first least frequently use
  Same logic is used at task 9 to find the frequency of the character and the object is converted into array by using Object.entries(objName) to convert it into string and loop through to find the first one the loop terminates after it finds the first one.

# Task 12 - Simple Api Call
  Simple api call using Fetch and async handled throught aysnc function and await. The header is also put in the get method becasue it requries api key. The api key is for now made public for ease of use but should always be in env file so it doesn't get uploaded in github and made public.
  



