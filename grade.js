
let eng = parseFloat(prompt("Enter your English marks:"));
let maths = parseFloat(prompt("Enter your Maths marks:"));
let ps = parseFloat(prompt("Enter your Pak Studies marks:"));
let bio = parseFloat(prompt("Enter your Biology marks:"));
let chem = parseFloat(prompt("Enter your Chemistry marks:"));
let physics = parseFloat(prompt("Enter your Physics marks:"));
let isl = parseFloat(prompt("Enter your Islamiyat marks:"));
let urdu = parseFloat(prompt("Enter your Urdu marks:"));

console.log("Your English marks are: " + eng);
console.log("Your Maths marks are: " + maths);
console.log("Your Pak Studies marks are: " + ps);
console.log("Your Biology marks are: " + bio);
console.log("Your Chemistry marks are: " + chem);
console.log("Your Physics marks are: " + physics);
console.log("Your Islamiyat marks are: " + isl);
console.log("Your Urdu marks are: " + urdu);

let totalMarks = 550; // Adjust this based on the maximum marks per subject
let obtainMarks = eng + maths + ps + bio + chem + physics + isl + urdu;

let percentage = (obtainMarks / totalMarks) * 100;
console.log("Your percentage is: " + percentage + "%");
