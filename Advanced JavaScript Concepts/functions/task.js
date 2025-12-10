// Write a BMI calc
function bmi(weight, height) {
  return weight / (height * height);
}

console.log(bmi(65, 1.5).toFixed(2));

// Create a reusable discount calc (hof)
function discountCalc(discount) {
  return function (price) {
    return price - price * (discount / 100);
  };
}

let ten = discountCalc(10);
let twenty = discountCalc(20);

console.log(ten(10));
console.log(twenty(10));

// create a counter using closure
function counter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

let c = counter();
console.log(c());

// create a pure func to transform a value

function double(val) {
  return val * 2;
}

// use iife to isolate variables
(function () {
  const password = "secret password";
  console.log(password);
})();
console.log(password);
