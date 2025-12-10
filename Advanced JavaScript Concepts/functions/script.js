// Q1 : whats the difference between fnc declaration and expression in terms of hoisting?
// = fnc decl accepts hoisting but fnc exp does not

// Task : convert this into a fat-arrow fnc
function multiply(a, b) {
  return a * b;
}

// converted
let multiply = (a, b) => {
  return a * b;
};

// Q2 : what does the ... operator mean in perameters?
// = Rest operator

// Task : use rest perameters to accept any nymber of scores and return the total
function getScores(...scores) {
  let total = 0;
  scores.forEach(function (val) {
    total = total + val;
  });
}

getScores(10, 12, 16);

// Q3 : fix the fnc with early return

function checkAge(age) {
  if (age < 18) {
    return "Too young";
  }
  return "Allowed";
}

// Task : pass a fnc to another fnc and execute it inside

function abcd(val) {
  val();
}
abcd(function () {
  console.log("hey");
});

// Pure & Impure fncs

let total = 0;
function add(val) {
  total += val;
} // this is a impure fnc

let total1 = 0;
function add(val) {
  let newTotal = total1;
  newTotal += val;
} // this is pure fnc

// Q4 : closure
function acbd() {
  let val = 0;
  return function () {
    console.log(val);
  };
}

function outer() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = outer();
counter();
counter();

// Task : convert this fnc to an iife
function init(){
    console.log('initialized');
}

// converted
(function init(){
    console.log('initialized');
})();