
//69:Objects
// let info = {
//     Name:"ihsan",
//     age:22,
//     rollNo:211163,
// }
// console.log(info);

//access using dot notation
// let info = {
//     Name:"ihsan",
//     fName:"haji rehman",
//     age:22,
//     rollNo:211163,
//     city:"orakzai agency"
// };
// console.log(info.Name);
// console.log(info.fName);
// console.log(info.age);
// console.log(info.rollNo);
// console.log(info.city);

//access using bracket notation
// let info = {
//     Name:"ihsan",
//     fName:"haji rehman",
//     age:22,
//     rollNo:211163,
//     city:"orakzai agency"
// };

// console.log(info["age"]);

// let Names = {
//     Name:["ihsan","asmat","naeem"],
//     age : [22,20,18],
//     city : ["peshawar", "hangu", "teerah"]
// };
// console.log(Names.Name[0]);
// console.log(Names.Name[1]);
// console.log(Names.Name[2]);
// console.log(Names.age[0]);
// console.log(Names.age[1]);
// console.log(Names.age[2]);

// let Names = {
//     Name:["ihsan","asmat","naeem"],
//     age : [22,20,18],
//     city : ["peshawar", "hangu", "teerah"]
// };
// console.log(Names.Name[0], " : ",Names.age[0]);
// console.log(Names.Name[1], " : ", Names.age[1]);
// console.log(Names.Name[2], " : " , Names.age[2]);
// console.log(Names["city"][1]);

//create an object
//const info = {};

//add the information
// info.Name = "ihsan",
// info.age = 22,
// info.city = "hangu";
// console.log(info);

// const data = new Object();
// data.Name = "asmat";
// data.age = 22;
// data.city = "peshawar";
// console.log(data);

// let info = {};
// info.Name = "ihsan",
// info.age = 22,
// info.city = "hangu";
// const data = new Object(info);
// console.log(data);

// Create an Object
// const person = new Object();

// // Add Properties
// person.firstName = "John";
// person.lastName = "Doe";
// person.age = 50;
// person.eyeColor = "blue";
// console.log(person);


// const person = {
//     firstName: "John",
//     lastName : "Doe",
//     id       : 5566,
//     fullName : function() {
//       console.log(this.firstName + " " + this.lastName +" " +"id is :" + this.id) 
//     }
//   };
//   person.fullName();


// const car = { 
//     carName: "mercedes"
//  };

// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   id: 5566,
//   fullName: function() {
//     console.log(this.firstName + " " + this.lastName + " " + "id is: " + this.id + " " + "and his car name is: " + car.carName);
//   }
// };

// person.fullName();

//add new properties to an existing element
// let person = {
//     Name:"ihsan ullah",
//     age : 22
// }
// person.color = "black";//add new property using dot notation
// person["gender"] = "male";//add new property using bracket notation
// console.log(person)

//************************************************************************ */
//70:Objects:Properties

//empty objects
// let car = {}
// console.log(car)

// //add property to an object

// let person = {}
// person.age = 22;
// person.gender = "male";
// person["color"] = "black"
// console.log(person);

// //access object properties

// let color = {
//     color:"red",
//     owner : "ihsan ullah",
// }
// console.log(color)

// //how can we change its value

// let info = {
//     color:"red",
//     owner : "ihsan ullah",
//     model:2024
// }
// info.color = "white";
// console.log(info)

// //delete a property
// // let delt = {
// //     color:"red",
// //     owner : "ihsan ullah",
// //     model:2024,
// //     price:"25lac"
// // }
// // delete delt.model
// // console.log(delt)

// //check property existence
// let delt = {
//     color:"red",
//     owner : "ihsan ullah",
//     model:2024,
//     price:"25lac"
// }
// console.log("owner" in delt)//owner exists in delt object
// console.log("tyres" in delt)//tyres does not exist in delt object

//???????????????????????????????????????????????????????????????

//71:Objects:Methods

//add methods to an object

//create an empty object

// let car = {}

// //add some properties
// car.color = "black"
// car.model = 2002

// //add method to start car
// car.start = function(){
//     console.log("the car has started ")
// }
// car.start()

//create object with props and methods

// let info = {
//     name: "Ihsan Ullah",
//     village: "Sarozai Piala",
//     city: "Hangu",
//     age: 22,
//     start: function() {
//         console.log("my name is : " +this.name +" " + "and i belong from the village : " +this.village);
//     }
// };

// info.start();

//method with return

// let info = {
//     name: "Ihsan Ullah",
//     village: "Sarozai Piala",
//     city: "Hangu",
//     age: 22,
//     start: function() {
//        // return("my name is : " +this.name +" " + "and i belong from the village : " +this.village);
//         return "my district name is : " +this.city + " " +"and my age is : " +this.age//this keyword refers to the current object
//      }
// };

// // console.log(info.start());
// let returnString = info.start()
// console.log(returnString)

//benefit of object

// let person = {
//     Name : "ihsan ullah",
//     age : 22,
//     city : "orakzai agency",
//     profession : "student",
//     start : function(){
//         return this.Name + " " + this.age
//     },
//     brithrday : function(){
//         this.age += 1;
//         console.log("happy brithday you are now " +this.age + " " +"years old"); 
//     }
// }
// //console.log(person.start())//output : ihsan ullah 22
// person.brithrday()

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''""""

// 72:"Objects:Constructors

// function Car(color, model, year){
//     this.color = color;
//     this.model = model;
//     this.year = year;
// }

// //create new objects using constructor function

// let car1 = new Car("sliver" , "toyota", 2021);

// let car2 = new Car("white" , "honda", 2022);
// console.table([car1,car2])
// console.log(car1)
// console.log(car2)

// //add methods to constructor
// function Car(c, m, y){
//     this.color = c;
//     this.model = m;
//     this.year = y;
//     this.start = function(){
//         console.log(this.model + " has started")
//         console.log(this.color +" " + "is the color")
//     };
// }
// //testing constructor method
// let car3 = new Car("black", "BMW" , 2002);
// let car4 = new Car("white" , "mercedes", 2022);
// let car5 = new Car("white" , "hevel", 2022);
// car3.start();
// car4.start();
// car5.start()

//another real word example

// function Person(firstName, lastName,a){
//     this.fn = firstName;
//     this.ln = lastName;
//     this.age = a;
//     this.printFullName = function(){
//         console.log(`${firstName} ${lastName} and age is ${this.age}` )
//     }
// }
// let person1 = new Person("ali", "rehman", 22);
// let person2 = new Person("ihsan", "ullah", 20);
// let person3 = new Person("adil", "khan", 18);
// // console.log(person1);
// // console.log(person2);
// // console.log(person3);
// // console.log(person1, person2,person3)
// person1.printFullName()
// person2.printFullName()
// person3.printFullName()

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//75 :Objects:Checking for properties and methods

//HOW TO CHECK PROPERTIES IN AN OBJECT

//method 1: using the in operator

// let car = {
//     model : "toyota",
//     color : "red"
// }
// console.log("model" in car)//return true
// console.log("year" in car)//return false bcz it does not exist

// //METHOD 2: using the hasOwnProperty() method
// console.log(car.hasOwnProperty("model"));//return true
// console.log(car.hasOwnProperty("year"));//return false bcz it does not exist

//METHOD 3 : using typeof to check for methods
//example function and its using typeof operator (just to clarify stuff)

// function  test(){
// }
// console.log(typeof test)

// let car = {
//     model : "toyota",
//     color : "red",
//     year : 2022,
//     start : function(){
//         console.log("car is starting")

//     }
// };
// console.log(typeof car.start ==='function')
// console.log(typeof car.stop ==='function')

//METHOD 4 : using undefined check

// let car = {
//     model : "toyota",
//     color : "red",
//     //year : 2022,
// };
// if (car.year === undefined){
//     alert("year doesn't exist on car ")
// }
// else{
//     alert("wawoo! year exist on car")
// }
