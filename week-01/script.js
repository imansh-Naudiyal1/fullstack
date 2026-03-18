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
console.log(adultsStudents);