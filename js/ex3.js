/* Q3 */
var valid_input = false
var followingDay = ""
var user_input_day = prompt("Please enter a day of the week as a three letter lower case abbreviation\n(sun, mon, tue, wed, thu, fri, or sat).");
switch (user_input_day) {
   case "sun":
      user_input_day = "Sunday";
      followingDay = "Monday";
      valid_input = true
     break;
   case "mon":
      user_input_day = "Monday";
      followingDay = "Tuesday";
      valid_input = true
     break;
   case "tue":
      user_input_day = "Tuesday";
      followingDay = "Wednesday";
      valid_input = true
     break;
   case "wed":
      user_input_day = "Wednesday";
      followingDay = "Thursday";
      valid_input = true
     break;
   case "thu":
      user_input_day = "Thursday";
      followingDay = "Friday";
      valid_input = true
     break;
   case "fri":
      user_input_day = "Friday";
      followingDay = "Saturday";
      valid_input = true
     break;
   case "sat":
      user_input_day = "Saturday";
      followingDay = "Sunday";
      valid_input = true
     break;
   default:
   window.alert("You gave an invalid input.")
 }
if (valid_input == true) {
   window.alert("You entered " + user_input_day + "\nThe following day is: " + followingDay)
}



window.location.href = "../index.html";