
function myFunction() {
	var name = document.getElementById("fname").value;
	// name.value = x.value.toUpperCase();
	
	document.getElementById("paste").value = name;
	document.getElementById("paste1").value = name; 
	console.log(name)
	// silly = name;
	// console.log(silly)
}


	// A value to access a function. 
	// var full_name = function (first_name, last_name) {
	// 	return (first_name + " " + last_name);
	// }
	// alert(full_name("bobby", "boy"));


	// Build an E counter. 
	// Psudo code: 
	// Ask the user for a phrase to check and put it into a variable. 
	// If the entry is invalid(not a string), 
	// 	Alert the user & 
	// 	Exit the function with a failure report. 
	// Otherwise
	// 	Make a 0 counter for the E's so we have a counter to use/add up things to. 
	// 	Create a for loop and: Create a var one time that will reprsent (and that we will use to iterating through) each index, stipulate that we'll keep running the code below as long as the value of our variable is less than that phrase's length, increment it (if we're still iterating).
	// 		If the character at the index that we're on is an "E" or "e", 
	// 			increment the E counter. 
	// 	Alert the amount of E's in the phrase and return success. 

	



	// function countE() {
	// 	var phrase = prompt("Which phrase would you like to examine?");
	// 	if (typeof(phrase) != "string") {
	// 		alert("That's not valid dude.");
	// 		return false;
	// 	}else{
	// 		var eCount = 0;
	// 		for(var index = 0; index < phrase.length; index ++) {
	// 			if (phrase.charAt(index) == 'e' || phrase.charAt(index) == 'E')
	// 				eCount++;
	// 		}
	// 	}
	// 	alert("There are " + eCount + " E's in \"" + phrase + "\".");
	// 	return true;
	// }

	// function test(){
	// 	var nothing = "something";
	// 	alert("why doesn't this work? "  nothing ); //whatthe? why does not including the "+" here throw the error in the console "test is not defined"? what is all of that in the error? ? 
	// }























