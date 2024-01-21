console.log("Hello World");
let intrestRate = 0.3;
intrestRate = 1 ;
console.log(intrestRate);

// const used for variables that dont change 

// PRIMITIVE TYPES 
let name = 'CODING WITH MOSH'; //string
let age = 30;//number

console.log(typeof(age)); //number
age = 'hello';
console.log(typeof(age)); //string

let isApproved = false; //Boolean

let firstName = undefined; // ~ default firstName = undefined ->let firstName;
console.log(typeof(firstName)); //undefined

// REFERENCE TYPES -> Object, ARRAY, FUNCTION 
let selectedColor = null; // null => used to clear the value of variable
console.log(typeof(selectedColor)); //object

// OBJECTS
// HOW TO CALL ANOTHER JS FILE IN THIS FILE 
function loadScript(url)
{    
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    head.appendChild(script);
}
loadScript('objects.js')