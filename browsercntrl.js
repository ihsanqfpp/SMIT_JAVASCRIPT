// //GET FULL URL OF THE CURRENT PAGE
// let currentURL = window.location.href;
// console.log(currentURL)

// //GET DOMAIN NAME
// let domain  = window.location.hostname;
// console.log(domain);

// //GET PATH NAME
// let pathName = window.location.pathname
// console.log(pathName);

//GET HASH /ANCHOR (DIFFERNT SECTIONS ON PAGE ,CURRENT SECTION)
// let hashName = window.location.hash;
// console.log(hashName);

//SET NEW URL
// window.location.href = 'https://www.google.com/search?q=islamia+university+bahawalpur&rlz'

//>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>
//77 :Browser control:Getting and setting the URL another way

//ASSIGN NEW URL
//window.location.assign('https://www.youtube.com')

//REPLACE METHOD
//window.location.replace('https://www.google.com')

//RELOAD THE  CURRENT PAGE
//window.location.reload(true);//reload from the server
//window.location.reload(false);//reload from the cache
//window.location.reload();//by default : reload from cache

//######################################################################################

//78 :Browser control:Forward and reverse

//history.back();
// history.forward();
// history.go(-3);
// history.go(2);

//%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%5

//79 : Browser control:Filling the window with content

//FILLING A WINDOW WITH CONTENT METHOD 1 : document.write
//OPEN A NEW TAB/WINDOW
//var monkeyWindow = window.open();
 
 //HTML CONTENT TO PUT IN THE NEWLY OPENED TAB/POPUP WINDOw

//  var windowContent = "<h1>Capuchin monkey</h1><img src= '1.jpg'><p>The word capuchin derives from aroup of friars<br>named the Order of Friars Minor Capuchin who wear<br>brownrobes with large hoods covering their heads.</p>";
// monkeyWindow.document.write(windowContent);

//FILLING A WINDOW WITH CONTENT METHOD 2 : using location.assign or href

//monkeyWindow.location.assign('https://www.w3schools.com')//by asign
//monkeyWindow.location.href('https://www.w3schools.com')//by href

//FILLING A WINDOW WITH CONTENT METHOD 3 : opening a specific URL directly
//window.open('https://www.w3schools.com')

//CLOSE ORIGinal WINDOW

//window.close();