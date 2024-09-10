
     //JAVASCRIPT PART 01
//### 2. **Variables for Strings**
 //**Assignment:** Write a JavaScript program that declares a string variable for a user’s name and a
//greeting message. Display the greeting message in an alert boxuse

//let userName = "ihsanullah";
//let greetingMessage = "welcome to the my website";
//alert(userName + " "  + greetingMessage);


// ### 3. **Variables for Numbers**
// - **Assignment:** Create a JavaScript program that declares two number variables, adds them, and shows the result in an alert.
// let num1 = parseFloat(prompt("Enter number 1")); 
// let num2 = parseFloat(prompt("Enter number 2"));

// let result = num1 + num2;
// alert("The sum of these numbers is: " + result);


// ### 4. **Variable Names Legal and Illegal**
// - **Assignment:** Write a JavaScript script demonstrating examples of legal and illegal variable
// names. Display the legal variable names in alerts and comment out the illegal ones with explanations

// Legal Variable 
//     Can start with a letter, underscore (_), or dollar sign ($) but not a number.
//     May contain letters, digits, underscores, and dollar signs after the first character.
//     Case-sensitive: myVar and myvar are treated as different variables.
//     Cannot be a reserved keyword (like var, let, if, etc.).

//     examples:
//     let firstName;
//     let _user;
//     let $name;
//     let num1;
//     let _num2;

//     Illegal Variable Names:
//     Cannot start with a number.
//     Cannot contain spaces.
//     Cannot be a JavaScript reserved word (like class, let, const, function, return, etc.).

//     examples:
//     let 2num;    
//     let first name;    
//     let const;       
//     let function;  

// ### 5. **Math Expressions: Familiar Operators**
// - **Assignment:** Create a basic calculator using JavaScript that can add, subtract, multiply, and
// divide two numbers. Prompt the user for input and display the result in an alert

// let num1 = parseFloat(prompt("Enter number 1")); 
// let num2 = parseFloat(prompt("Enter number 2"));

//  let result = num1 + num2;
//  alert("The sum of these numbers is: " + result);
//  alert("The subtraction of these numbers is: " + (num1 - num2));
//  alert("The multiplication of these numbers is: " + num1 * num2);
//  alert("The division of these numbers is: " + num1 / num2);

// ### 6. **Math Expressions: Unfamiliar Operators**
// - **Assignment:** Write a JavaScript program that demonstrates the use of the modulus operator to
// find the remainder of division and the increment/decrement operators. Show the results using alerts
//  let num1 = parseFloat(prompt("Enter number 1")); 
//  let num2 = parseFloat(prompt("Enter number 2"));
//  let remainder = num1 % num2;
// alert("The remainder of " + num1 + " divided by " + num2 + " is: " + remainder);
// num1++;
// alert("After incrementing, num1 is now: " + num1);
// num2--;
// alert("After decrementing, num2 is now: " + num2);

// ### 7. **Math Expressions: Eliminating Ambiguity**
// - **Assignment:** Create a script that calculates a complex mathematical expression (e.g., `(5 + 2) * 3
// - 4 / 2`) using parentheses to clarify the order of operations. Display the result in an alert.

//let num=2
//console.log(num++ + num++ * num++ - --num / num-- + ++num)
//console.log(2 + 3 * 4 - 4 / 4 + 4)


// ### 8. **Concatenating Text Strings**
// - **Assignment:** Write a JavaScript program that concatenates several strings (e.g., "Hello, ",
//     "World!") and displays the final concatenated string in an alert.
// let Name = "ihsan ";
// let lastName = "orakzai";
// alert(Name + lastName);

    // ### 9. **Prompts**
    // - **Assignment:** Create a JavaScript program that prompts the user for their name and age, then
    // displays a customized greeting message using an alert.

    // let Name = prompt("enter your name ");
    // let age =prompt("enter your age") ;
    // alert("my name is " +Name +" " + "and my age is : " +age);

    // ### 10. **if Statements**
    // - **Assignment:** Write a program that prompts the user for a number and checks if it is positive,
    //negative, or zero using an `if` statement. Display the result in an alert.

    // let num = prompt ("enter number ");
    // if (num > 0){
    //     alert("number is positive : " +num);
    // }
    // else if(num < 0){
    //     alert("number is negative : " +num)
    // }
    // else{
    //     alert("number is zero " +num)
    // }

//  - **Assignment:** Create a script that prompts the user to input two numbers and then compares
//  them using comparison operators (e.g., `>`, `<`, `===`). Display the result of the comparison in an alert.

// let num1 = prompt ("enter num1");
// let num2 = prompt ("enter num2");
// if (num1>num2){
//     alert("num1 is greater")
// }
// else{
//     alert("num2 is greater" );
// }

// ### 12. **if...else and else if Statements**
// - **Assignment:** Write a program that prompts the user for their exam score. Based on the score,
// display a message with their grade (e.g., A, B, C, etc.) using `if...else` and `else if` statements

// let marks = prompt("enter your marks");
// if (marks > 90){
//     alert("grade A-1")
// }
// else if (marks >= 80){
//     alert("grade A")
// }
// else if (marks >= 70){
//     alert("grade B")
// }
// else if (marks >= 60){
//     alert("grade C")
// }
// else{
//     alert("grade F")
// }


// ### 13. **Testing Sets of Conditions**
// - **Assignment:** Create a script that prompts the user for their age and whether they are a student.
// Based on the input, display a message using logical operators to test multiple conditions

// let age = prompt ("enter your age");
// let position = prompt("are u a student");

// if (age > 18 && position === "yes"){
//     alert("allow for sclorship test")
// }
// else{
//     alert("not allowed for sclorship test")
// }


// ### 14. **if Statements Nested**
// - **Assignment:** Write a program that prompts the user for a username and password. If the
// username is correct, check the password. If both are correct, display a welcome message; otherwise,
// display an error message.

// let userName = prompt("enter username");
// let password = prompt ("enter password");
// if (userName === "ihsan"){
//     if (password === "12345"){
//         alert("welcome")
//     }
//     else{
//         alert("check password")
//     }
// }
// else{
//     alert("error")
// }
 

// ### 15. **Arrays**
// - **Assignment:** Create a JavaScript program that declares an array of five different fruits. Use a
// loop to display each fruit in an alert.

// let arr = ["apple", "banana", "orange", "mango", "peach"];
// alert(arr);

// ### 16. **Arrays: Adding and Removing Elements**
// - **Assignment:** Write a script that adds a new fruit to the beginning and end of an array, removes
// the first and last elements, and then displays the final array in the console.

//  let arr = ["apple", "banana", "orange", "mango", "peach"];
//  arr.unshift("apricot");
//  arr.push("grapes");
//  console.log(arr);
//  arr.shift();
//  arr.pop();
//  console.log(arr)

// ### 17. **Arrays: Removing, Inserting, and Extracting Elements**
// - **Assignment:** Create a program that uses array methods to remove an element from the middle
// of an array, insert a new element at a specific position, and extract a portion of the array. Display the
// updated array in the console.

// let arr = ["apple", "banana", "orange", "mango", "peach"];
// arr.shift("orange");
// alert(arr);


// ### 18. **for Loops**
// - **Assignment:** Write a program that uses a `for` loop to print the numbers 1 to 10 in the console.

// for (let i=0; i<10; i++){
//     console.log(i);
// }

     //JAVASCRIPT PART 02

// ### Task 1: **Basic Calculator**
// - **Objective:** Create a simple calculator that performs basic
// arithmetic operations (addition, subtraction, multiplication, division).
// - **Details:**
// - Prompt the user to input two numbers.
// - Prompt the user to choose an operation (+, -, *, /).
// - Display the result in an alert.
// - Example: If the user inputs `5`, `3`, and `+`, the alert should show `8`

// let num1 = parseFloat(prompt("Enter number 1")); 
// let num2 = parseFloat(prompt("Enter number 2"));

//  let result = num1 + num2;
//  alert("The sum of these numbers is: " + result);
//  alert("The subtraction of these numbers is: " + (num1 - num2));
//  alert("The multiplication of these numbers is: " + num1 * num2);
//  alert("The division of these numbers is: " + num1 / num2);

// ### Task 2: **Personalized Greeting**
// - **Objective:** Display a personalized greeting based on user input.
// - **Details:**
// - Prompt the user for their name and favorite color.
// - Display an alert that says, "Hello [Name], I see your favorite color is
// [Color]!"
// - Example: If the user inputs `John` and `blue`, the alert should show,
// "Hello John, I see your favorite color is blue!"


// let Name = prompt ("enter your name");
// let color = prompt ("enter your favorite color")
// if (Name === "ihsan" && color === "black"){
//     alert("hello "  +Name  +" " + "i see your favorite color : " +color);
// }
// else{
//     alert("invalid");
// }


// ### Task 3: **Odd or Even Number**
// - **Objective:** Determine if a number is odd or even.
// - **Details:**
// - Prompt the user to enter a number.
// - Use an `if` statement to check if the number is odd or even.
// - Display an alert with the result.
// - Example: If the user inputs `4`, the alert should show, "4 is an even
// number."

// let num = prompt ("enter a number");
// if (num % 2 == 0){
//     alert("the number is even : " +num)
// }
// else{
//     alert("number is odd : " +num)
// }


// ### Task 4: **Favorite Fruits Array**
// - **Objective:** Manage a list of favorite fruits using an array.
// - **Details:**
// - Create an array with at least five different fruits.
// - Add a new fruit to the beginning and end of the array.
// - Remove the first and last fruits from the array.
// - Display the final array in the console.
// - Example: Start with `["Apple", "Banana", "Mango", "Orange",
// "Pineapple"]`.

// let arr = ["banana", "orange" , "mango", "grapes", "apple",];
// arr.unshift("apple");
// console.log(arr);
// arr.push("apricot");
// console.log(arr);
// arr.shift();
// console.log(arr)
// arr.pop();
// console.log(arr)

// ### Task 6: **Grade Calculator**
// - **Objective:** Determine a grade based on a student's score.
// - **Details:**
// - Prompt the user to enter their score (0-100).
// - Use `if...else if` statements to determine the grade (A, B, C, D, F).
// - Display the grade in an alert.
// - Example: If the user inputs `85`, the alert should show "Your grade is
// B."

// let marks = prompt("enter your marks");
// if (marks > 90){
//     alert("grade A-1")
// }
// else if (marks >= 80){
//     alert("grade A")
// }
// else if (marks >= 70){
//     alert("grade B")
// }
// else if (marks >= 60){
//     alert("grade C")
// }
// else{
//     alert("grade F")
// }



// ### Task 7: **Countdown Using Loops**
// - **Objective:** Create a countdown from 10 to 1.
// - **Details:**
// - Use a `for` loop to print the numbers 10 to 1 in the console.
// - Once the countdown is complete, display an alert saying "Countdown
// complete!"

for (let i = 10; i >= 1; i--) {
    console.log(i); 
}
alert("Countdown complete!");

