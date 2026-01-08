// 2629 - Given an array of functions [f1, f2, f3, ..., fn], return a new function fn that is the function composition of the array of functions.
let compose = function (functions) {
  return function (x) {
    let result = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      result = functions[i](result);
    }
    return result;
  };
};

// 2703 . Return Length of Arguments Passed
let argumentsLength = function (...args) {
  return args.length;
};

// 2666. Allow One Function Call
let once = function (fn) {
  let flag = false;
  return function (...args) {
    if (flag === false) {
      flag = true;
      return fn(...args);
    } else {
      return undefined;
    }
  };
};

// 2623 . Given a function fn, return a memoized version of that function.
let memoize = function (fn) {
  const cachedVal = {};
  return function (...args) {
    const val = args;
    if (val in cachedVal) {
      return cachedVal[val];
    } else {
      const result = fn(...args);
      cachedVal[val] = result;
      return result;
    }
  };
};
