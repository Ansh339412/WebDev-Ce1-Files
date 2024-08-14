/*
	Survey Form Validation
	Today's Date
	Alan Simpson
 */

/*
 * Handles the submit event of the survey form
 *
 * param e  A reference to the submit event
 * return   True if no validation errors; False if the form has
 *          validation errors
 */
function validate(e) {
	//	Hides all error elements on the page
	hideAllErrors();

	//	Determine if the form has errors
	if (formHasErrors()) {
		// 	Prevents the form from submitting
		e.preventDefault();
		return false;
	}

	return true;
}

/*
 * Handles the reset event for the form.
 *
 * param e A reference to the reset event
 * return  True allows the reset to happen; False prevents
 *         the browser from resetting the form.
 */
function resetForm(e) {
	// Confirm that the user wants to reset the form.
	if (confirm('Clear survey?')) {
		// Ensure all error fields are hidden
		hideAllErrors();

		// Set focus to the first text field on the page
		document.getElementById("fname").focus();

		// When using onReset="resetForm()" in markup, returning true will allow
		// the form to reset
		return true;
	}

	// Prevents the form from resetting
	e.preventDefault();

	// When using onReset="resetForm()" in markup, returning false would prevent
	// the form from resetting
	return false;
}


/*
 * Does all the error checking for the form.
 *
 * return   True if an error was found; False if no errors were found
 */
function formHasErrors() {
	// Code below here
	let errorFlag = false;
	let requiredFields = ["fname","lname","studentnum"];
	for(let i = 0; i<requiredFields.length;i++)
	{
		let textField = document.getElementById(requiredFields[i]);
		if(!formFieldHasInput(textField))
		{
			document.getElementById(requiredFields[i] + "_error").style.display = "block";
			if(!errorFlag)
			{
				textField.focus();
				textField.select();
			}

			//Raise the error flag
			errorFlag = true;
		}

	}
	let regex = new RegExp(/^\d{6}$/);
	let studentNumValue = document.getElementById("studentnum").value;

	if(!regex.test(studentNumValue))
	{
		document.getElementById("studentnum_error").style.display = "block";
	
		if(!errorFlag)
		{
			document.getElementById("studentnum").focus();
			document.getElementById("studentnum").select();
		}

		//Raise the error flag
		errorFlag = true; 
	}
	let program = ["bit","aviation","accounting","ba"];

	let programChecked = false;

	for(let i=0; i<program.length; i++)
	{
		if(document.getElementById(program[i]).checked)
		{
			programChecked = true;
		}
	}

	if(!programChecked)
	{
		document.getElementById("program_error").style.display = "block";

		//Raise error flag
		errorFlag = true;	
	}

	let programMajor = ["bit","ba"]

	for(let i = 0; i < programMajor.length; i++)
	{
		if(document.getElementById(programMajor[i]).checked && !formFieldHasInput(document.getElementById(programMajor[i] + "major")))
		{
			//	Display the error message
			document.getElementById(programMajor[i] + "major_error").style.display = "block";
			if(!errorFlag)
			{
				document.getElementById(programMajor[i] + "major").focus();
			}

			//Raise the error flag
			errorFlag = true;
		}
	}

	// Code above here
	return errorFlag;
}

/*
 * Resets (hides) all of the error messages on the page.
 */
function hideAllErrors() {
	//Get an array of the error fields
	let errorFields = document.getElementsByClassName("error");
	for(let i=0; i<errorFields.length; i++)
	{
		errorFields[i].style.display = "none";
	}
}

/*
 * Handles the onclick event for program radio buttons for programs
 * that have a major.
 *
 * param  major  The id of the radio button that was clicked
 */
function showMajor(major) {
	document.getElementById("majorheading").style.display = "block";

		document.getElementById(((major=="bit") ? "ba":"bit") + "majordiv").style.display = "none";

		document.getElementById(major + "majordiv").style.display = "block";
		document.getElementById(major + "major").value = "";
		document.getElementById(major + "major").focus();
}

/*
 * Hides elements in the Major Information section of the page
 */
function hideMajor() {
	// Hide the heading in the major section
	document.getElementById("majorheading").style.display = "none";

	// Hide the text field input for both majors
	document.getElementById("bitmajordiv").style.display = "none";
	document.getElementById("bamajordiv").style.display = "none";
}

/*
 * Determines if a text field element has input
 *
 * param   fieldElement A text field input element object
 * return  True if the field contains input; False if nothing entered
 */
function formFieldHasInput(fieldElement) {
	// Check if the text field has a value
	if (fieldElement.value == null || fieldElement.value.trim() == "") {
		// Invalid entry
		return false;
	}

	// Valid entry
	return true;
}

/**
 * Handles the load event of the document.
 */
function load() {
	// Add event listener for the form submit
	document.getElementById("survey_form").addEventListener("submit", validate);

	// Reset the form using the default browser reset
	// This is done to ensure the radio buttons are unchecked when the page is refreshed
	// This line of code must be done before attaching the event listener for the customer reset
	document.getElementById("survey_form").reset();

	// Add event listener for our custom form submit function
	document.getElementById("survey_form").addEventListener("reset", resetForm);

	// Add event listeners for the radio buttons
	document.getElementById("bit").addEventListener("click",
		function(){
			showMajor("bit");
		});
	document.getElementById("ba").addEventListener("click",
		function(){
			showMajor("ba");
		});
	document.getElementById("aviation").addEventListener("click", hideMajor);
	document.getElementById("accounting").addEventListener("click", hideMajor);

}

// Add the event listener for the document load
document.addEventListener("DOMContentLoaded", load);
