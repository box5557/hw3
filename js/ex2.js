/* Q2
*/
var user_input_name = prompt("What is your name?");
var user_input_units = prompt("Please enter the number of units you have completed at college.");
if (!isNaN(user_input_units)) {
   if (user_input_units >= 0 && user_input_units % 1 == 0) {
      var gradeStanding = 0;
      if (user_input_units <= 30) {
         gradeStanding = "Freshman";
      }
      else if (user_input_units <= 60) {
         gradeStanding = "Sophmore";
      }
      else if (user_input_units <= 90) {
         gradeStanding = "Junior";
      }
      else {
         gradeStanding = "Senior";
      }
      window.alert("Hello " + user_input_name + ",\nYour grade standing is " + gradeStanding)
   }
   else {
      window.alert("Sorry, you entered an invalid entry.")
   }
}
else {
   window.alert("Sorry, you entered an invalid entry.")
}
window.location.href = "../index.html";