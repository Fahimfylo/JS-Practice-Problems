// 2267 - Write a function createHelloWorld. It should return a new function that always returns "Hello World"
let createHelloWorld = function () {
  return function (...args) {
    return "Hello World";
  };
};
// console.log(createHelloWorld()());


// 2620 - Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
let Counter = function (n) {
  return function () {
    return n++;
  };
};
// let count = Counter(5);
// console.log(count());


// 2704 - Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
let expect = function (val) {
  return {
    toBe: (value) => {
      if (value === val) {
        return true;
      } else {
        throw "Not Equal";
      }
    },
    notToBe: (value) => {
      if (value !== val) {
        return true;
      } else {
        throw "Equal";
      }
    },
  };
};
// let num = expect(5);
// console.log(num.toBe(5));
// console.log(num.notToBe(5));


// 2665 - Write a function createCounter. It should accept an initial integer init. It should return an object with three functions. The three functions are: increment(), decrement(), reset()

// post increment-decrement
let createCounter = function (init) {
  let currVal = init;
  return {
    increment: () => {
      return currVal++;
    },
    decrement: () => {
      return --currVal;
    },
    reset: () => {
      currVal = init;
      return currVal;
    },
  };
};

// pre increment-decrement
let createCounter2 = function (init) {
  let currVal = init;
  return {
    increment: () => {
      return ++currVal; 
    },
    decrement: () => {
      return --currVal;   
    },
    reset: () => {
      currVal = init;
      return currVal;     
    },
  };
};
// const counter = createCounter2(5);
// console.log(counter.increment());


// 2635 - Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element. The returned array should be created such that returnedArray[i] = fn(arr[i], i).
let map = function(arr, fn) {
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
