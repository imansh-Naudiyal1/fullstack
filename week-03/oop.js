// class dogs {
//      constructor(name,breed){
// this.name = name
// this.breed = breed
//     }
//     bark(){
//         console.log("Woof");
//     }
// }
// const tommy = new dogs("Tommy", "Labrador");
// tommy.bark();


class User{
  constructor(naam , email){
    this.naam = naam
    this.email = email
  }
  naamBolo(){
    return` mera naam ${this.naam}  hai`
  }
}
const userName = new User("Himanshu naudiyal" , "himanshu@gmail.com");
console.log(userName.naamBolo());
