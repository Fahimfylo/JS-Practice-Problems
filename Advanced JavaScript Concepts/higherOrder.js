// higher order fncs : fncs who accepts fncs or return fncs
let arr = [1, 2, 3, 4, 5];
arr.forEach(function () {});

// constructor fncs
function makeCircle(color) {
  this.radius = 5;
  this.color = color;
  this.border = 2;
  this.pressable = true;
}
let circleRed = new makeCircle("red");
let circleGreen = new makeCircle("green");


// First class fncs
// Function stored in a variable :

function sayHello() {
  console.log("Hello!");
}

const greet = sayHello;
greet(); 

// Function passed as argument
function printMessage(fn) {
  fn();  
}
function sayHi() {
  console.log("Hi!");
}
printMessage(sayHi);


// New keyword
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const p1 = new Person("Fahim", 21);
console.log(p1);


// IIFE : immediately invoked function expression
// IIFE = function expression + immediately executed = private scope creation.
const counter = (function () {
  let count = 0; // private

  return {
    increment() {
      count++;
      console.log(count);
    },
    decrement() {
      count--;
      console.log(count);
    }
  };
})();

counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
