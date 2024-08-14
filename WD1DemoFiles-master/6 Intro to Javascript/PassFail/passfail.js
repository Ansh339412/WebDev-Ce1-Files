/*
	Pass/Fail Demonstration 
	March 3, 2023
	Alan Simpson
*/

const load = () => {

	if(localStorage.getItem("marksData"))
	{
		let list = document.getElementById("list");
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

	mark = parseFloat(mark);
	if(name !="" && isNaN(mark)==false)
	{
		displayData(name, mark);
	}

	resetFields();
}

const displayData = (name, mark) => {
	//	Declare variables
	let passfail = "pass";
	if(mark<50)
	{
		passfail = "fail";
	}

	let newRow = document.createElement("tr");
	let newNameTd = document.createElement("td");
	let newMarkTd = document.createElement("td");
	let newPFTd = document.createElement("td");

	newNameTd.innerHTML = name;
	newMarkTd.innerHTML = mark;
	newPFTd.innerHTML = passfail;
	newRow.appendChild(newNameTd);
	newRow.appendChild(newMarkTd);
	newRow.appendChild(newPFTd);

	let tBody = document.getElementById("list")
	tBody.appendChild(newRow);

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

const saveListData = () => {
	let list = document.getElementById("list");
	localStorage.setItem("marksData",list.innerHTML);
}

document.addEventListener("DOMContentLoaded", load);







