// Build: Write a simple data transformation pipeline (e.g., transform raw JSON user data into a formatted report)// Input: Raw JSON user data
const users = [
 {id:1, name:"A", age:20, active:true, salary:100},
 {id:2, name:"B", age:17, active:false, salary:200},
 {id:3, name:"C", age:25, active:true, salary:300}
];
const report = users
    .filter(user => user.active && user.age >= 18)
    .map(user => `${user.name} earns ${user.salary} dollars.`);
console.log(report);