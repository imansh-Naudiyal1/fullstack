// there are the eight basic data types in JavaScript....

// 1. Number
let age = 25;
console.log(typeof age); 

// 2. BigInt
let  bigNumber = 9007199254740991n;
console.log(typeof bigNumber);
// the "n" at the end means it's a BigInt

// 3.String
// A string in javascript must be surrounded by quotes(single, double or backticks)

let name = "John Doe";
let name2 = 'single quotes are ok too';
let name3 = `can embed another ${name}`;
console.log(name3);

// backticks are embed variables and expressions into a string by wrapping them 

// 4.Boolean(is a logical type ( yes or no )).....

let isGreater = 4 < 1;
console.log(isGreater);

// 5. Undefined
let undef = undefined;
console.log(undef);

// 6. Null
let empty = null;
console.log(empty);

// 7. Symbol ( a unique identifier )
let id = Symbol("id");
console.log(typeof id);

// 8. Object ( a collection of properties )
let user = {
    name: "Himanshu Naudiyal",
    age: 23,
};
console.log(typeof user);

// Task:
// What is the output of the following code?

let name4 = 'Himanshu';
console.log(`Hello, ${1}`);
console.log(`Hello, ${"name"}`);
console.log(`Hello, ${name4}`);