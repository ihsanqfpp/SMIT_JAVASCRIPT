// console.log(document.querySelector("#one")).innerHTML   
// // console.log(document.querySelector("#one")).value
// console.log(document.querySelector("#one").innerHTML).value;
// console.log(document.querySelector("#one").textContent)

// let text = "ihsan ullah";
// document.querySelector("#one").innerHTML = text;

// let text = document.getElementsByTagName('p')[0].innerHTML;
// console.log(text)

//58 The DOM
//components of DOM 
// Document:the entire web page
// Element nodes : tags like <p><h1><div> etc
// text nodes : the text inside the Element
// attributes : properties like id,class,src etc

// console.log(document.getElementById('para'));
// console.log(document.getElementById('para').textContent = "the text has been modified");
// console.log(document.getElementById('para').style.color = "green");

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//59 :The DOM:Parents and children
//parent node:any element that contains another element is called a parent
//child node:the element inside a parent are its children
//######################################################################

//60 :The DOM:Finding children

//select the parent element
// let parent = document.getElementById('parentDiv');

// //get all child elements
//  let child = parentDiv.children;//children returns only HTML elements

//  console.log("all child elemnts : " , child);

 //loop through child elements and change their text color

//  for (let i = 0; i < child.length; i++){
//     child[i].style.color = "red";
//  }


 //get all childnodes

//  let children = parentDiv.childNodes;
//  console.log("All child nodes:", children);
 
//  // Loop through child nodes
//  for (let i = 0; i < children.length; i++) {
//      // Check if the node is an element
//      if (children[i].nodeType === 1) {
//          children[i].style.backgroundColor = "red"; // Corrected 'backgroundColor'
//      }
//  }
 
