
//TASK 01 Check if a Number is Positive, Negative, or Zero:
// let num=prompt("enter a number");
// if (num > 0){
//     alert("the number you entered is positive : " +num);
// }
// else if(num < 0){
//     alert("the number you entered is negative : " +num);
// }
// else{
//     alert("the number you entered is  zero : " +num);
// }


//TASK 02 Create a function that checks if a person is eligible to vote based on their age. A person can vote if they are 18 years or older
// let person=prompt("enter person name");
// let age=prompt("enter the person age");
// if (age >= 18){
//     alert(person +"is eligible to vote :")
// }
// else{
//     alert(person +"is not eligible to cast vote ")
// }

//TASK 03 Check If a Number is Even or Odd:
// let num=prompt("enter a number ")
// if (num % 2 == 1){
//     alert(num  +"is odd number ")
// }
// else{
//     alert(num  +"is even number ")
// }


//TASK 04 Determine if a Student Passed or Failed:

// let marks=prompt("please enter student marks")
// if (marks >= 60){
//     alert("the student is passed and his marks is : " +marks)
// }
// else{
//     alert("the student is failed and his marks is :" +marks)


 //TASK 05
// let age=prompt("enter the person age")
// let lic=prompt("do you have licence")
// if (age>=18 && lic=="yes" ){
//   alert("you can drive in pakistan")
// }
// else{
//   alert("you can't")
// }

         //TASK 06
// let userName=prompt("enter username")
// let pass=prompt("enter your password")
// if (userName=="admin" && pass=="12345" || pass=="admin@123"){
//   alert("Grant access")
// }
// else{
//   alert("no permission")
// }

   //TASK 07
// let citizen=prompt("enter your nationlity")
// let age=prompt("enter age")
// if (citizen=="pakistani" && age>18){
//   alert("you have right to vote")
// }
// else{
//   alert("you can't poll vote")
// }


   //TASK 08

// let day=prompt("enter the day name")
// let weather=prompt("enter weather status")
// if (day=="sunday" || day=="saturday" && weather=="sunny"){
//   alert("you can go out for tour")
// }
// else{
//   alert("stay in home")
// }

   //TASK 09

// let homeWork=prompt("enter your homework status")
// let ticket=prompt("do you have movie ticket")
// let money=prompt("do you have enough money")

// if ((homeWork=="yes" && (ticket=="yes") || money=="yes"))
//   {
//   alert("you can go to watch for movie")
// }
// else{
//   alert("complete your homework")
// }

//TASK 10 Temperature Warning

// let temp=prompt("enter the today tempreature");
// if (temp >= 100){
//     alert("heat warning")
// }
// else if (temp <= 32){
//     alert("cold weather")
// }
// else{
//     alert("you entered wrong information")
// }

//TASK 11 Discount Calculation

// let amount=prompt("enter your purchasing amount");
// if (amount > 1000){
//     alert("20% discount");
// }
// else if (amount > 500 && amount < 1000){
//     alert("10% discount")
// }
// else{
//     alert("no discount")
// }

//TASK 12 Eligibility Check

// let age=prompt("enter the person age ");
// let salary=prompt("enter salary of this person");
// if (age > 18 && salary <=35000){
//     alert("eligible for zakaat")
// }
// else{
//     alert("not eligible")
// }


//TASK 13 Shipping Cost Calculation

// let weight=prompt("enter the package weight");
// if (weight === "2kg"){
//     alert("charge 500 for shipping")
// }
// else if (weight > "2kg" && weight < "5kg"){
//     alert("charge 1000 for shipping ")
// }
// else if (weight > "5kg"){
//     alert(" charged 5000 for shipping")
// }
// else{
//     alert("you entered wrong weight")
// }
 
//TASK 14 Day of the Week Handling
// let day=prompt("enter the name of day");
// if (day=== "monday"){
//     alert("starts of the week");

// }
//  else if (day === "friday"){
//     alert("weekend is almost over")
// }
// else {
//     alert("mid of the week")
// }

//TASK 15
// let userName=prompt("enter your username :");
// let password=prompt("enter your password :");

// if (userName === "rokhan" && password === "12345"){
//    alert("this is my username : " +userName);
//    alert("this is my password : " +password);
// }
// else{
//    alert("you entered invalid username or password")
// }

// TASK 16 DISCOUNT ELIGIBILITY
// let customer=prompt("have the customer is a member");
// let code=prompt("the customer have a valid coupon code ? ");
// let amount = prompt("enter the purchasing amount");

// if ((customer === "yes" || code === "yes") && amount > 1000){
//    alert("eligible for discount");
// }
// else{
//    alert("not eligible for discount")
// }

   // TASK 17 

// let email = "ihsan@gmail.com";
// let pass = "ihsan2004";

// if (email === "ihsan@gmail.com"){
//    if (pass === "ihsan2004"){
//       alert ("both is correct")
//    }
//    else {
//       alert("password is wrong")
//    }
// }
// else {
//    alert ("email is wrong")
// }

//TASK 18

// let startStation = prompt (" please enter your start station name ");
// let endStation = prompt (" please enter your end station name ");

// if (startStation === "univeristy road" && endStation === "saddar"){
//    console.log("go to station B");
//    console.log ("cut PKR 20")
// }
// else if (startStation === "saddar" && endStation === "hayatabad"){
//    console.log("go to station C")
//    console.log("cut PKR 30")
// }
// else if (startStation === "university road" && endStation === "hayatabad"){
//    console.log("go to station C");
//    console.log("cut PKR 40");
// }
// else{
//    console.log("invalid route ! please check your station ")
// }

//task 19
// let email = prompt ("enter your email")
// let pass = prompt("enter your password")

// if (email === "ihsan@gmail.com"){
//    if (pass === "ihsan2004"){
//       alert ("both is correct")
//    }
//    else {
//       alert("password is wrong")
//    }
// }
// else {
//    alert ("email is wrong")
// }
// alert("email or password is wrong")

//task 20
// let startTime = prompt("Enter your start time (e.g., '6AM', '12PM')");
// let endTime = prompt("Enter the end time (e.g., '12PM', '6PM')");

// if (startTime === "6AM" && endTime === "12PM") {
//    console.log("Good morning");
// }
// else if (startTime === "12PM" && endTime === "6PM") {
//    console.log("Good afternoon");
// }
// else if (startTime === "6PM" && endTime === "9PM") {
//    console.log("Good evening");
// }
// else if ((startTime === "9PM" || startTime === "10PM" || startTime === "11PM") && 
//          (endTime === "12AM" || endTime === "1AM" || endTime === "2AM" || endTime === "3AM" || 
//           endTime === "4AM" || endTime === "5AM" || endTime === "6AM")) {
//    console.log("Good night");
// }
// else if (startTime === "12AM" && endTime === "12PM") {
//    console.log("Midnight");
// }
// else {
//    console.log("You entered wrong");
// }


//task 21 find square root of a number

// let num1 = prompt("enter a  number");
// let num2 = Math.sqrt(num1);
// console.log(num2)


// let num2 = Math.sqrt(100);
// console.log(num2)

//task 22 to find area of  right angle triangle formaula (base * height)/2

// let base = prompt("enter the base value");
// let height = prompt("enter the height value");
// let area = (base * height)/2;
// console.log("Base : "+base,"height :" +height, "area : " +area)

//task 23 find area of regular triangle

// let a = +prompt("enter the  value of a");
// let b = +prompt("enter the  value of b");
// let c =  +prompt("enter value of c");
// let d = (a + b + c) / 2;
// let temp = d *(d -a)*(d-b)*(d-c);
// let area = Math.sqrt(temp);
// console.log(area)

//task 24 swapping of two nnumbers
//using tempreory varibale 

// let a = prompt("enter value of a");
// let b = prompt("enter value of b");
// console.log('the value of a is : ' +a, 'the value of b is : ' +b);
// console.log("after swapping")
//  temp = a;
//  a = b;
//  b = temp;
//  console.log('the value of a is : ' +a, 'the value of b is : ' +b);

 //without tempreory variable 
 
// let a = +prompt("enter value of a");
// let b = +prompt("enter value of b");
// console.log('the value of a is : ' +a, 'the value of b is : ' +b);
// console.log("after swapping")

//  a = a + b;
//  b = a - b;
//  a = a - b;
//  console.log('the value of a is : ' +a, 'the value of b is : ' +b);

//task 25  celsius convert into franhiate

// let celsius = +prompt("enter temp in celsius");
// let frnht = (celsius * 1.8) + 32;
// console.log(frnht);

//task 26 conversion of kelometeres into miles 

// let kms = prompt("enter kilogram");
// const factor = 0.621371;
// let miles = kms * factor;
// console.log(miles);

//task 27 check if  a number is positive,negative or zero
// let num = prompt("enter a number");
// let res = Math.sign(num);
// console.log(res);

//BY OTHER METHOD
// let num = prompt("enter a number");
// if (num > 0){
//    console.log(num + " : " +"is positive");
// }
// else if(num < 0){
//    console.log(num  +" : " +"is negative");
// }
// else{
//    console.log(num + " : " +"is zero")
// }

//task 28 rendom number between range (1-100)
//formula : math.random() * (highest number - lowest number ) + lowest number

// let a = Math.random() * (100 - 1) + 1;
// console.log(a);

//task 29 Fruit Price Checker
 let fruit = prompt("enter fruit name");

// switch (fruit) {
//    case "apple":
//       console.log("price is : 300")
//       break;
//    case "mango":
//       console.log("price is : 200")
//       break;
//       case "banana":
//       console.log("price is : 500")
//       break;
//       case "orange":
//       console.log("price is : 100")
//       break;
//       case "kabaab":
//       console.log("price is : 800")
//       break;

//    default:
//       break;
// }
switch(fruit){
   case "apple":
      console.log ("the price is : 300");
      break;
}
console.log(fruit);





   





