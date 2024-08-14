/*
	Pass/Fail Demonstration 
	1 august 2024
	Karman Singh
*/

const load = () => {

	//	Check the local storage for data
	if(localStorage.getItem("marksData"))
	{
		let list = document.getElementsByTagName("tbody")[0];
		list.innerHTML = localStorage.getItem("marksData");
		clearbutton.style.display = "block";
	}

	//	Event listeners for the buttons
	let submit = document.getElementById("submit");
	submit.addEventListener("click", checkData);

	let clear = document.getElementById("clearbutton");
	clear.addEventListener("click", clearButton);
}

const checkData = () => {
	//	Validate the data
	//	Retrieve the data from the DOM
	let name = document.getElementById("name").value;
	let mark = document.getElementById("mark").value;

	//	Javascript will treat an empty string as 0
	//	so first we must parse (cast variable)
	mark = parseFloat(mark);
	if(name !="" && isNaN(mark)==false)
	{
		displayData(name,mark);
	}

	resetFields();
}

const displayData = (name, mark) => {
	//	Declare variables
	let passfail = "pass";

	if(mark < 50)
	{
		passfail = "fail";
	}

	//	Create the elements using DOM methods
	let newTr = document.createElement("tr");
	let newNametd = document.createElement("td");
	let newMarkTd = document.createElement("td");
	let newPFTd = document.createElement("td");

	//	Add the data to the tds
	newNametd.innerHTML = name;
	newMarkTd.innerHTML = mark;
	newPFTd.innerHTML = passfail;
	newTr.appendChild(newNametd);
	newTr.appendChild(newMarkTd);
	newTr.appendChild(newPFTd);

	//	Append the new tr to the tbody
	document.getElementsByTagName("tbody")[0].appendChild(newTr);

	//	Dot Notation
	clearbutton.style.display = "block";

	saveListData();
}

//	Clears the data in the form and hides the clear button
const clearButton = () => {
	let tbody = document.getElementById("list");
	while (tbody.firstChild) {
		tbody.removeChild(tbody.firstChild);
	}

	clearbutton.style.display = "none";
	resetFields();

}

//	Resets the form's inputs
const resetFields = () => {
	document.getElementById("name").value = "";
	document.getElementById("mark").value = "";
	document.getElementById("name").focus();
	saveListData();
}

//Saves the list data into local storage
const saveListData = () => {
	let list = document.getElementsByTagName("tbody")[0];
	localStorage.setItem("marksData",list.innerHTML);
}

document.addEventListener("DOMContentLoaded", load);












