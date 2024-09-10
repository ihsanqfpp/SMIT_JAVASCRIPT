let num1=parseFloat(prompt("enter first number : "));
let num2= parseFloat(prompt("enter second number : "));
let opr=prompt("enter operator");


// Perform arithmetic operations
let sum = num1 + num2;

if (opr== "+"){
    alert("the addition of two numbers is : " + sum )
    }
    else if(opr== "-"){
        alert("the subtraction of two numbers is : " + (num1-num2) )
    }
    else if (opr== "*"){
        alert("the multplication of two numbers is : " + (num1*num2) )
    }
    else if (opr== "/"){
        alert("the division of two numbers is : " + (num1/num2) )
    }
    else if (opr== "%"){
        alert("the remainder of two numbers is : " + (num1%num2) )
    }
    else{
        alert("you entered invalid operator")
    }

// console.log("the addition of these two numbers is : " +sum);
// console.log("the subtraction of these two number is :" + (num1 - num2));
// console.log("the multiplication of these two numbers is : " +num1*num2);
// console.log("the division of these two numbers is : " +num1/num2);
// console.log("the remainder of these two  numbers is : " +num1%num2);

// alert("the addition of two numbers is : " +sum);
// alert("the subtraction of two numbers is : " + (num1-num2));
// alert("the multiplication of two numbers is : " + num1*num2);
// alert("the division of two numbers is : " + num1/num2);
// alert("the remainder of two numbers is : " +num1%num2);

// document.write("the addition of two numbers is : " +sum +" <br>" );
// document.write("the subtraction of two numbers is : " + (num1-num2) +" <br>");
// document.write("the multiplication of two numbers is : " + num1*num2 +" <br>");
// document.write("the division of two numbers is : " + num1/num2 +" <br>");
// document.write("the remainder of two numbers is : " +num1%num2 +" <br>");