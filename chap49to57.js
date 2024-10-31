// function green(){
//     let pra = document.querySelector("h1").style.color = "green";
// }
// function red(){
//     let pra = document.querySelector("h1").style.color = "red";
// }
// function blue(){
//     let pra = document.querySelector("h1").style.color = "blue";
// }

//49  Reading field values

// function checkAddress(email){
//     if(document.getElementById(email).value === ''){
//         alert("email is required");
//     }
// }

// function checkAddress(email){
//     let emailValue = document.getElementById(email).value
//     if (emailValue === ''){
//         alert("email is required")
//     }
//     else{
//         alert(`your email is : ${emailValue}`)
//     }
// }
//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// 50  Setting field values

// function setAreaName() {
//     let zipcode = +document.getElementById("zipcode").value; // Get the zipcode value as a number
//     let area = document.getElementById("area"); // Get the area input element

//     if (zipcode === 45200) {
//         area.value = "glora";
//     } else if (zipcode === 44210) {
//         area.value = "islambad f-10 markaz";
//     } else if (zipcode === 44320) {
//         area.value = "islambad federal board";
//     } else if (zipcode === 44310) {
//         area.value = "islambad alama iqbal open university";
//     } else {
//         alert("invalid zipcode");
//     }
// }

//@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//51 Reading and setting paragraph text
// function readParagraphText(){
//     let paragraph = document.getElementById('myParagraph');
//     let output = document.getElementById('output');
//     let paragraphText = paragraph.textContent
//     output.textContent = 'current paragraph text : " ' + paragraphText + '"'
// }

// function setParagraphText(){
//     let paragraph = document.getElementById('myParagraph');
//     let newTextDocument = document.getElementById('newTextInput');
//     let output = document.getElementById('output');  
//     let newText = newTextInput.value;

//     if(newText.trim() === ''){
//         output.textContent = 'please enter some text to set !';
//     }
//     else{
//         paragraph.textContent = newText;
//         output.textContent = 'paragraph text has been updated';
//         newTextInput.value = '';
//     }

// }

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//56 Target all elements by tag name

// function myparagraph(){
//     let paragraph = document.getElementsByTagName('p');
//     console.log(paragraph);

//     for(let i=0; i<paragraph.length;i++){
//         paragraph[i].classList.add('styled');
//     }

// }

//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

//57 Target some elements by tag name
//get all <li>elements

// let items = document.getElementsByTagName('li');
// //highlight even items 

// document.getElementById('highlighteven').onclick = function (){
//     for (let i=0; i < items.length; i++){
//         if((i + 1) % 2 === 0){
//             items[i].classList.add('highlight')
//         }
//     }
// };

// document.getElementById('highlightodd').onclick = function (){
//     for (let i=0; i < items.length; i++){
//         if((i + 1) % 2 !== 0){
//             items[i].classList.add('highlight')
//         }
//     }
// };

// //reset all items 

// document.getElementById('Reset').onclick = function (){
//     for (let i = 0; i<items.length; i++){
//         items[i].classList.remove('highlight')
//     }
// }

