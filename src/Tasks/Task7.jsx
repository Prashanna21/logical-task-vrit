import React from "react";

const flatArrayFun = (arr, flatedArray) => {
  //neat recursion fucntion took time to think but worked
  if (arr.length) {
    for (let i = 0; i < arr.length; i++) {
      flatArrayFun(arr[i], flatedArray);
    }
  } else {
    flatedArray.push(arr);
  }
};

function Task7() {
  const array = [1, 2, [2, 3], [1, 2, 3, 5, [2, 4]], [4, 5]];
  const flatedArray = [];

  for (let i = 0; i < array.length; i++) {
    flatArrayFun(array[i], flatedArray);
  }

  console.log(flatedArray);

  return (
    <div className="text-center">
      Output of "[1, 2, [2, 3], [1, 2, 3, 5, [2, 4]], [4, 5]]" is :
      {String(flatedArray)}
    </div>
  );
}

export default Task7;
