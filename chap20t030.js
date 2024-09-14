
     //26 Rounding numbers
//let num = Math.random()//generate 0.1 t0 0.9
// console.log(num * 9 + 1)
// console.log(num)
// console.log(Math.round(2.3))//round the float value
// console.log(Math.ceil(2.3))//get the upper value
// console.log(Math.floor(2.3))//get the lower value

//console.log(Math.random() *100 + 1)
// let num = Math.random() * 100
// console.log(num)
// console.log(Math.round(num))
// console.log(Math.ceil(num))
// console.log(Math.floor(num))

// let num = prompt("enter a  number");
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num))

// let num1 = parseFloat(prompt("Enter number 1")); 
// let num2 = parseFloat(prompt("Enter number 2"));

//  let result = num1 + num2;
//  console.log("The sum of these numbers is: " + result);
//  console.log(Math.round(result));
//  console.log(Math.ceil(result));
//  console.log(Math.floor(result))

  //28 Converting strings to integers and decimals there are 4 methods
       //BY +
//   let num1 = +prompt("enter number 1");//+ convert strings into number
//   let num2 = +prompt("enter number 2");
//   console.log(num1 + num2)
    
   //BY parseFloat
//   let num3 = "22";
//   let newnum = parseFloat(num3);
//   let num4 = "8";
//   let newnum2 = parseFloat(num4)
//   console.log(newnum + newnum2)

     //BY parseInt
// let num3 = parseInt("22");
// let num4 = parseInt("8");
// console.log(num3 + num4)

     //BY Number
// let num = "30";
// console.log(Number(num) + 40)

  //30 Controlling the length of decimals

  let num = 2.345678888
  console.log(num.toFixed(2));