/* Q1
*/
var user_input_number = prompt("Please input a number between 1 and 100");
if (user_input_number > 1 && user_input_number < 100) {
   window.alert("Thank you! You entered " + user_input_number + ", a valid number.")
}
else {
   window.alert("Sorry, " + user_input_number + " is not a valid entry.") 
}
window.location.href = "../index.html";