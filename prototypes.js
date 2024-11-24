//a prototype is an object from which other objects inherit properties and
//methods.every js object has a prototype.the prototype is also an object


// let numbers = [1,2,3,4,5];
// console.log(numbers)

// //let create an object
// let person = {
//     name : "ihsan ullah",
//     age : 22
// }
// console.log(person)

//EXAMPLE OF PROTOTYPE/PROTOTYPE IN ACTION

//constructor function

// function person (name,age){
//     this.name = name;
//    this. age = 22;
// }
// //create person object using person constructor function
// let ali = new person("ali" , 23)
// console.log(ali)

//if we try to access salary(which does not exist in person) we get undefined
//console.log(salary)

//let's add salary to person using prototype
// person.prototype.salary = 50000;
// console.log(ali.salary)

// //let's add  isEligilbe on person
// person.prototype.isEligible = true
// console.log(ali.isEligible)

// //adding a method to the prototype

// person.prototype.great = function(){
//     console.log("hello , my name is " +this.name +  " and i am " +this.age +" years old")
// };
//  let person1 = new person("asmat" , 20)
//  let person2 = new person("naeem " , 18)
//  let person3 =new person("hafeez",15)
//  let person4 = new person("safeer", 10)

//  person1.great()
//  person2.great()
//  person3.great()
//  person4.great()

//ADDING METHODS TO JAVASCRIPT BUILT-IN OBJECTS
//  Array.prototype.first = function (){
//     return this[2];
//  };
//  let numbers  = [1,2,3,4]
//  console.log(numbers.first());
