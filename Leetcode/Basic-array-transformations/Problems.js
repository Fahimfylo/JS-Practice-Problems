// 2635 - Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i).
let map = function (arr, fn) {
  let newArr = [];
  arr.forEach((value, index) => {
    newArr.push(fn(value, index));
  });
  return newArr;
};

let arr = [1, 2, 3];

function multiplyByIndex(value, index) {
  return value * index;
}
console.log(map(arr, multiplyByIndex));

// 2634 - Given an integer array arr and a filtering function fn, return a filtered array filteredArr. The fn function takes one or two arguments: arr[i] - number from the arr i - index of arr[i]
let filter = function (arr, fn) {
  let newArr = [];
  arr.forEach((value, index) => {
    if (fn(value, index)) {
      newArr.push(value);
    }
  });
  return newArr;
};

// 2626 - Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element.
// This result is achieved through the following operations: val = fn(init, nums[0]), val = fn(val, nums[1]), val = fn(val, nums[2]), ... until every element in the array has been processed. The ultimate value of val is then returned.
// If the length of the array is 0, the function should return init.
// Please solve it without using the built-in Array.reduce method.
var reduce = function (nums, fn, init) {
  let val = init;
  if (nums.length === 0) {
    return init;
  } else {
    nums.forEach((num) => {
      val = fn(val, num);
    });
  }
  return val;
};
