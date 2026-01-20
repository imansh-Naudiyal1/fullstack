// variable are used to store this information like user data....
let message;
message = 'Hello';
console.log(message);

// we can combine declaration and assignment in one line
let greeting = 'Hi there!';
console.log(greeting);

// we can also declare multiple variables in one line...
let user = 'Alice', age = 25, isMember = true;
console.log(user, age, isMember);

// var is older way to declare variables, avoid using it in modern code
var oldVariable = 'I am old';
console.log(oldVariable);

// const is used to declare variables that should not be reassigned

const pi = 3.14;
console.log(pi);
// pi = 3.145445 if i try to reassign this will give error

greeting = 'Hello again!';
console.log(greeting);