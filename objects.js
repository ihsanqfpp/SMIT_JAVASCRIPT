
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

let arr = [];

const input = document.getElementById("input");


function add(){
    arr.push(input.value);
    console.log(arr)
}
function remove() {
    if (arr.length > 0) {
        arr.pop();
        console.log(arr);
    } 
}