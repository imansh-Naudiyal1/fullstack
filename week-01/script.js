// function createAccount(initialBalance){
//     let balance = initialBalance;
//     function deposit(amount){
//         balance = balance + amount;
//     }
//     function withdraw(amount){
//         if(amount <= balance){
        
//             balance -= amount;
//         }
//     }
//     function getBalance(){
//         if(balance < 500){
//             console.log('balance is no sufficient');
//         }
//         return balance;
//     }
//     return {getBalance, deposit, withdraw};
// }
// let account = createAccount(1000);
// console.log("Current balance: " + account.getBalance());
// account.deposit(500);
// console.log("Deposit: 500");
// console.log("Current balance: " + account.getBalance());
// account.withdraw(1400);
// console.log("Withdraw: 1400");
// console.log("Current balance: " + account.getBalance());

// map 
 
const number =[1,2,3,4,5];
 const multiplyByThree = number.map(num => num * 3);
//  console.log(multiplyByThree);

// Uppercase mein convert

const Words = ["a","b","c"];
const ConvertWords = Words.map(word => word.toUpperCase());
// console.log(ConvertWords);


//  user name output and uppercase mein convert

const users = [
  { name: "aman", age: 20 },
  { name: "ravi", age: 25 }
 ];
// const name = users.map(user => user.name.toUpperCase());
// console.log(name);

// // [
//   { value: 10, double: 20 },
//   { value: 20, double: 40 },
//   { value: 30, double: 60 }
// ]
const numbers = [10,20,30];
const doubleNumbers = numbers.map(num => ({ value: num, double: num *2}));
// console.log(doubleNumbers);

//name change to label and price change to cost 
const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 }
];
 const parameterNameChange = products.map(products => ({ label: products.name , cost: products.price}));
    // console.log(parameterNameChange);


    // filter
    const numbers1 = [1,2,3,4,5];
    const evenNumbers = numbers1.filter(num => num % 2 === 0);
    // console.log(evenNumbers);

    const fruits = ["apple", "kiwi", "grape", "avocado"];
    const fruitNumbers = fruits.filter(fruits => fruits.length > 4);
    // console.log(fruitNumbers);

    const users1 = [
  { name: "Aman", age: 20 },
  { name: "Ravi", age: 15 },
  { name: "Neha", age: 25 }
];
const adultsStudents = users1.filter(users1 => users1.age >= 18);
// console.log(adultsStudents);

const products1 = [
  { name: "A", price: 100 },
  { name: "B", price: 500 },
  { name: "C", price: 50 }
];
const expenseProducts = products1.filter(products1 => products1.price > 100);
// console.log(expenseProducts);

// print all even numbers using by forEach

const number2 = [1,2,3,4,5];
const evenNumbers1 = [];
number2.forEach(num => {
  if(num % 2 === 0){
    evenNumbers1.push(num);
  }
  return evenNumbers1;
});
// console.log(evenNumbers1);

// find sum of array using forEach

const number3 =[1,2,3,4,5];
let sum = 0;
number3.forEach(num => {
  sum += num;
});
// console.log(sum);

// convert this into forEach 
// for(let i=0; i < arr.length; i++){
//    console.log(arr[i]);
// }

const arr =[1,2,3,4,5];
// arr.forEach(num => console.log(num));

// some question

let arr1 = [1,2,3,4,5];
let arr2 = arr1.map(num => num *2)
// console.log(arr2);

let numbersEven = [1,2,3,4,5,6];
let evenNumbers2 = numbersEven.filter(num => num % 2 === 0);   
// console.log(evenNumbers2);


let arr3 = [1,2,3,4,5];
let sum1 = 0;
arr3.forEach(num => sum1 += num);
// console.log(sum1);

// extract Names use object destructuring object.value() method

let users2 = [
 {name:"A", age:20},
 {name:"B", age:30}
]
let userNames = Object.values(users2).map(user => user.name);
// console.log(userNames);

// adults only

 let adults = [
 {name:"A", age:20},
 {name:"B", age:17},
 {name:"C", age:25}
 ];
 let adultOnly = adults.filter(adults => adults.age >= 18);
//  console.log(adultOnly);

// price filter + transform
let shoppingPrice =[
 {name:"A", price:100},
 {name:"B", price:200},
 {name:"C", price:50}
];
let prices = shoppingPrice.filter(shoppingPrice => shoppingPrice.price >= 100);
// console.log(prices);

// reduce
 let salaries =[
 {salary:100},
 {salary:200},
 {salary:300}
];
 let totalSalary = salaries.reduce((total , salary) => total + salary.salary, 0);
//  console.log(totalSalary);

let CountEven = [1,2,3,4,5,6];
let evenCount = CountEven.reduce((count , num) => {
  if(num % 2 === 0){
    return count + 1;
  }
  return count;
}, 0);
// console.log(evenCount);


// { A:20, B:30 } we want output this and build object skills

let users3 = [
 {name:"A", age:20},
 {name:"B", age:30}
]
let userObject = users3.reduce((obj, user) => {
  obj[user.name] = user.age;
  return obj;
}, {});
console.log(userObject);