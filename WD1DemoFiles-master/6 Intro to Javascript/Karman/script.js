/*
	Javascript Intro Demo
	July 29 2024
	Karman Singh
*/

//	Declaring variables
var world = "hello";
let forteen = 7;

//	Let vs Var *Mostly use let because it's block based not global (if you accidentaly put a global variable's name as a function that already exists, it overwrites it)
if(true){
	let tmp = 123;
}

//	Write to Console
//console.log(tmp);

//	Arrays
let days = ["Monday","Tuesday","Wednesday","Thursday","Friday"];


//  Using document methods to retrieve elements from the HTML
let section = document.getElementsByTagName("section")[0]; //CASE SENSITIVE METHOD NAMES!!!
section.innerHTML += world; //section element da saara overwrite karta 


//	Document method to retireve only 1 specific elemt using ID from HTML
let div = document.getElementById("home");
//div.innerHTML = days;


//	Output the days of the week in a loop
//	Use template literals to avoid appending
for(let i=0; i<days.length; i++){
	div.innerHTML += `<p> ${days[i]} </p>`; //${} means evaluate, if not placed since it's in `` (backtick) form, it would simply write out "days[i]"
} //basically har ek layi paragraph banate


//	Get the class attribute of the div element
let att = div.getAttribute("class");

if(att=="" || att==null){ //if there's no attribute called class, or its null
	document.getElementById("home").setAttribute("class","main"); //setAttribute("what attribute you want to change","what you want to change it to")
} //reference JSstyles.css for "main" attribute

//	Calling Functions

hi();

hello("Karman");

//let result = favNum(7);
//console.log(`Your favourite number multiplied by 42 is ${result}`);

let num = prompt("What is your favourite number?");
console.log(`Your favourite number multiplied by 42 is ${favNum(num)}`);
