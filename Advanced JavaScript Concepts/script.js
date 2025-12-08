// * Higher order fncs : fncs who accepts fncs or return fncs
let arr = [1, 2, 3, 4, 5];
arr.forEach(function () {});


// * constructor fncs
function makeCircle(color) {
  this.radius = 5;
  this.color = color;
  this.border = 2;
  this.pressable = true;
}
let circleRed = new makeCircle("red");
let circleGreen = new makeCircle("green");


// * First class fncs
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


// * New keyword
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const p1 = new Person("Fahim", 21);
console.log(p1);


// * IIFE : immediately invoked function expression
// IIFE = function expression + immediately executed = private scope creation.
let ans = (function () {
  let privatVal = 10;
  return {
    getter: function () {
      console.log(privatVal);
    },
    setter: function (val) {
      privatVal = val;
    },
  };
})();
// ans.getter();   // 10
// ans.setter(50);
// ans.getter();   // 50


// * Prototypical inheritance
class Animal {
  speak() {
    console.log("Animal speaking...");
  }
}

class Dog extends Animal {}

let d = new Dog();
d.speak(); // inherited


// * This call apply blind
// a func that is inside of a object is a method - ** In any method "this" keyword always refers to parent object **
// "This" in various roles : global => window, function => window, method => object

// this 
const obj = {
  name: "Fahim",
  show() {
    console.log(this.name);
  }
};

obj.show(); // "Fahim"

// call : call() → Immediately calls a function with a specific this and individual arguments.
function sayHi() {
  console.log("Hi " + this.name);
}

let user = { name: "Rahim" };
sayHi.call(user); // Hi Rahim


// apply : apply() → Immediately calls a function with a specific this but arguments come as an array.
function sum(a, b) {
  console.log(a + b, this.x);
}

let obj1 = { x: 10 };

sum.apply(obj, [3, 4]); // 7 10


// bind : bind() → Returns a new function with a permanently set this, without calling it immediately.
function greet() {
  console.log("Hello " + this.name);
}

let user1 = { name: "Fahim" };

let newFn = greet.bind(user);

newFn(); // Hello Fahim


// * Pure & Impure Functions 
// Pure function → Predictable, no side effects | Impure function → Unpredictable or causes side effects.

// pure fncs
function add(a, b) {
  return a + b;
}
//  Same input gives same output
//  Doesn’t change anything outside
//  No randomness, no external dependency

// impure fncs
let x = 10;

function addToX(n) {
  x = x + n;   // modifies external variable → side effect
}