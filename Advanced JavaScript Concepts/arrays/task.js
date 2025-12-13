// Insert "Red" and "Blue" at the index 1 in this Array

let colors = ["Green", "Yellow"];
colors.splice = (1, 0, "red", "Blue");

// Extract only thee middle thre elements from this array

let items = [1, 2, 3, 4, 5, 6, 7];
let newArr = items.slice(2, 5);
// console.log(newArr);

// sort this array alphabetically and then reverse it
let names = ["Rahim", "Karim", "Ayesha", "Nusrat", "Hasan"];
// console.log(names.sort().reverse());

// use .map() to square each number
let arr = [1, 2, 3, 4, 5];
let squareArr = arr.map(function (val) {
  return val * val;
});
// console.log(squareArr);

// use .filter() to keep numbers greater than 10
let numbers = [9, 11, 31, 51, 5, 27, 99, 3, 7];
let bigNumbers = numbers.filter(function (val) {
  return val > 10;
});
// console.log(bigNumbers);

// use .reduce() to find the sum of this array
let marks = [10, 21, 19, 9];
let sum = marks.reduce(function (accu, val) {
  return accu + val;
}, 0);
// console.log(sum);

// use .find() to get first number less than : 10
let nums = [11, 31, 51, 5, 27, 99, 3, 7];
let lessNum = nums.find(function (val) {
  return val < 10;
});
// console.log(lessNum);

// use .some() to check if any student has scored below 35
let score = [11, 32, 51, 5, 27];
let ans = score.some(function (val) {
  return val < 35;
});
// console.log(ans);

// use .every() to check if all numbers are even
let number = [2, 4, 6, 8, 10];

let even = number.every(function (val) {
  return val % 2 === 0;
});
// console.log(even);

// destructure this array to get first name and last name
let fullName = ["Fahim", "Rahman"];
let [firstName, lastName] = fullName;

// merge two arrays using spread operator
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = [...a, ...b];
// console.log(c);

// add "BD" to the start of this array using spread
let countries = ["USA", "UK"];
let newCountries = ["BD", ...countries];
// console.log(newCountries);