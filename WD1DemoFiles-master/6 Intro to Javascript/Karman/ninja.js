/*
	DOM Methods	
	1 August 2024
	Karman Singh\
*/

document.addEventListener("DOMContentLoaded", load);

function load()
{
	let container = document.getElementById("main_container");
	container.setAttribute("class","container");

	let paragraphs = document.getElementsByTagName("p");
	for(let i=0; i<paragraphs.length; i++)
	{
		paragraphs[i].setAttribute("style","background-color: #FFF");
	}

	let tables = document.getElementsByTagName("table");
	for(let i = 0; i < tables.length; i++)
	{
		let trs = tables[i].getElementsByTagName("tr"); //grabbing all the rows within that specific table["i"] instead of all tables
		for(let j = 0; j < trs.length; j++)
		{
			if(j%2 == 0) // % is mod(remainder). basically saying if j/2 has a remainder of 0; or basically if j is even (to select even row)
			{
				trs[j].setAttribute("class","zebra");
			}
		}
	}
}
