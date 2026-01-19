// given a dynamic key let key = "age", how will you access user[key]?
let key = "age";
const person = {
  age: 25,
};
person[key];

// from the object below , print the lat and lon
const locations = {
  city: "Rajshahi",
  coordinates: {
    lat: 23.2,
    lon: 77.2,
  },
};
console.log(locations.coordinates.lat);

// what will happen if coordinates is missing? how can you prvent errors
const car = {
  brand: "Mazda",
  model: "RX-5",
  Engine: {
    v8: {
      pistons: 18,
      oiled: true,
      new: false,
    },
    auto: true,
  },
  tier: 1500,
};
car?.Engine?.v8?.new; // Optional chaining

// desctructure the city and lat object from the location object above
let { city } = locations;
let { lat } = locations.coordinates;

// desctructure the key 'first-name' as a variable called firstName
const user = {
  "first-name": "Fahim",
};
let { "first-name": firstName } = user;

// use for-in loop to log all keys in this object
const course = {
  title: "Javascript",
  duration: "4 weeks",
};

for (let key in course) {
  console.log(key);
}

// use Obaject.entries() to print all key-value pairs as:
Object.entries(course).forEach(function (val) {
  console.log(val[0] + ": " + val[1]);
});

// copy this object with spread operator
const original = { a: 1, b: 2 };
const copyObj = { ...original };

// find the problem
const obj1 = { info: { score: 80 } };
const clone = { ...obj1 };
// clone.info.score = 100; --> shallow copy
console.log(obj1.info.score);

// deep clone the above object safely
let newObj = JSON.parse(JSON.stringify(obj1));
newObj.info.score = 100;
console.log(obj1);

// rewrite this with optional chaining
const customer = {};
console.log(customer?.bill?.amount);

// use a variable to dunamically assign a property
const val = "role";
let obj = {
  name: "robot",
  [val]: "admin",
};
