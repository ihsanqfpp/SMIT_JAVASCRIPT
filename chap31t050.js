// 31  Getting the current date and time

// let date = new Date("March 20, 2025")
// console.log(date)
// console.log(date.getDay())
// console.log(date.getFullYear()) //for year start from zero
// console.log(date.getHours())
// console.log(date.getMonth())
// console.log(date.getMinutes())
// console.log(date.getTime())
// console.log(date.getMilliseconds())
// console.log(date.getTimezoneOffset())
// console.log(date.getUTCDate())
// console.log(date.getUTCDay())


    //RETRIVE CURRENT DAY
// let  dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// let now = new Date();
// let theDay = now.getDay();
// let nameOfToday = dayNames[theDay];
// console.log(nameOfToday)
 

   //RETRIVE CURRENT MONTH
// let month = ["january", "february","march","april","may","june","july","august","september",
// "october","november","december"];
// let now = new Date()
// let currentMonth =now.getMonth()
// let monthName = month[currentMonth]
// console.log(monthName);

// let d = new Date();
// d.setMonth(2);
// console.log(d)

// let a = new Date()
// a.setHours(7)
// console.log(a)

// let c = new Date()
// c.setSeconds(30)
// console.log(c)

//############################################################################################

//35   Functions

// function firstName(){
//     console.log("ihsan ullah");
// }
// function last(){
//     console.log("orakzai");
// }
// firstName();
// last();

// function sum(a,b){
//     console.log(a  + b);
//     console.log(a - b);
//     console.log(a * b);
//     console.log(a / b);
// }
// sum(30,10)

// function sum(math,sc,eng,urdu){
//     let marks = math + sc + eng + urdu;
//     return marks;
// }
// function percentage(tt){
//     let per = tt/400 * 100;
//     console.log(per);
// }
// let totalMarks = sum(50,95,75,65);
// percentage(totalMarks);


// function subtraction(num1 , num2){
//     console.log(num1 - num2);
// }
// subtraction(10 , 5)
// subtraction(100 , 50)

// let time = new Date()

// function counter(){
//     console.log(time.getHours() +" : " + time.getMinutes())
// }

 


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//      EVENTS

//01:click(onclick)

// function Name(){
//     alert("ihsan ullah orakzai")
// }
// sum();

//to chnge the color of h1 text
// function color(){
//     document.body.style.color = 'red';
// }


//02:Double click(ondblclick)

// function Name(){
//     alert("ihsan ullah orakzai")
// }
// Name();

// function color(){
//     console.log("ihsan ullah orakzai")
// }

//03:right click(oncontextmenu)
// function Name(){
//     alert("ihsan ullah orakzai")
// }
// Name();

//04:mousehover(onmouseenter)
// function Name(){
//     alert("ihsan ullah orakzai")
// }
// Name();

//05:mouseout(onmouseout)
// function Name(){
//     alert("ihsan ullah orakzai")
// }
// Name();

//06:mouseup(onmouseup)
// function Name(){
//     alert("ihsan ullah orakzai")
// }
// Name();

//07:mousedown(onmousedown)
// function Name(){
//     alert("ihsan ullah orakzai")
// }
// Name();

//onchange 

// function color(){
//     console.log("ihsan ullah orakzai")
// }

//08:keypress(onkeypress) 09:keyup(onkeyup) 10:load(onload) 11:unload(onunload) 12:resize(onresize) 12:scroll(onscroll)

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//38 Functions:Local vs. global variables
// {
//     let num =20;
//     num = 40;
//     console.log(num)
// }
// {
//     let num = 20;
//     console.log(num)
// 
// {
//     var name1 = "ihsan"
// }
// console.log(name1)

// {
//     const num1 = 30;
//     const num2 = num1 + 70;
//     console.log(num2)
// }

// {
//     let i  = 0;
//     for ( let i=0; i<5; i++)
//         console.log(i)
// }

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//39 switch statements:

// switch(new Date().getMonth()){
//     case 0:
//         month = "january";
//         break;
//     case 1:
//         month = "february";
//         break;
//     case 2:
//         month = "march";
//             break;
//     case 3:
//         month = "april";
//                 break;
//     case 8:
//         month = "september";
//         break;
// }
// console.log(month)
 

// let color = prompt("enter color name");
// switch(color){
//     case "red":
//         console.log("please stop");
//         break;
//     case "orange":
//         console.log("you may go now");
//         break;
//     case "yellow":
//         console.log("please be ready");
//         break;
// }

//calculator by switch statement
// let num1  = +prompt("entr number 1 ");
// let num2 = +prompt("enter number 2");
// let opr = prompt("enter operator please")

// switch (opr){
//     case "+" :
//         console.log("the addition of these numbers is : " + (num1 + num2) )
//         break;
//     case "-":
//         console.log("the subtraction of these numbers is : " + (num1 - num2) )
//         break;
//     case "*":
//         console.log("the multiplication of these numbers is : " + (num1 * num2) )
//         break;
//         case "/":
//         console.log("the division of these numbers is : " + (num1 / num2) )
//         break;
        

//     default:
//         console.log("you entered invalid operator")
//         break;
// }


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//41 while loops

// let i = 0
// while (i < 100 ){
//     console.log(i)
//     i++
// }













