// 2723 . Add Two Numbers Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number
var addTwoPromises = async function (promise1, promise2) {
  const val1 = await promise1;
  const val2 = await promise2;
  return val1 + val2;
};
