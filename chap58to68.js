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
//children:returns only child elements (actual html elements like h1,p,span,div etc)
//childNodes: returns all child nods,including text nodes,comments etc

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
 //%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//  61 :The DOM:Junk artifacts and nodeType

// let container = document.getElementById("container");
// let children = container.childNodes;
// let junk = []
// let elementNodes = []

// for (let i = 0; i < children.length; i++){
//     // console.log(children[i]);
//     if(children[i] .nodeType !== 1){
//         junk.push(children[i])
//     }
//     else{
//         elementNodes.push(children[i])
//     }
// }
// console.table([children,junk,elementNodes]);

//what is nodeType property?
      //the node type property returns node type, as a number,of the specified node.

//if the node is an element node, the nodeType property will return 1.
//if the node is an attribute node, the nodeType property will return 2.
//if the node is an text node, the nodeType property will return 3.
//if the node is an comment node, the nodeType property will return 8.
//this property is read only

//  let container = document.getElementById("container");
// let children = container.childNodes;

// for (let i = 0; i<children.length; i++){
//     if(children[i].nodeType === 1){
//         console.log("element node : ", children[i]);
//     }
//     else if(children[i].nodeType === 3){
//         console.log("text node :" , children[i].textContent.trim());
//     }
//     else if (children[i].nodeType === 8){
//         console.log("comment node : ", children[i].nodeValue);
//     }
// }
//&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// 62 :The DOM:More ways to target elements

// discussing in this chapter :
// firstChild:targets the first child node of an elements
// lastChild: targets the last child node of an elements
// nextSibling:returns the next Sibling  node of the current elements
// previousSibling:return the previous sibling node

//target the first element of child
// let list = document.getElementById("myList");
// let firstItem = list.firstElementChild;
// console.log(firstItem);

//target the last element child
// let list = document.getElementById("myList");
// let lastItem = list.lastElementChild;
// console.log(lastItem);
