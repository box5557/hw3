/* Q7
Following Second - The program has the following requirements:
Input
Time as three values: hours, minutes, seconds (validate input)
Output
Output the time entered and the time one second later.
Examples:
Time input: 14h17m59s
One second later: 14h18m0s
Time input: 6h59m59s
One second later: 7h0m0s
Time input: 23h59m59s
One second later: 0h0m0s
*/
window.alert("For this part, please give positive whole numbers only. Enter an hour between 0 and 23, minutes and seconds should be between 1 and 59.")
var user_input_hour = prompt("How many hours?");
var user_input_min = prompt("How many minutes?");
var user_input_sec = prompt("How many seconds?");
if (!isNaN(user_input_hour) && !isNaN(user_input_min) && !isNaN(user_input_sec)) {
   if (user_input_hour % 1 == 0 && user_input_min % 1 == 0 && user_input_sec % 1 == 0 && user_input_hour >= 0 && user_input_min >= 0 && user_input_sec >= 0) {
      /*stuff goes here*/
      if (user_input_sec > 59) {
         user_input_min++
      }
      if (user_input_min > 59) {
         user_input_hour++
      }
      if (user_input_hour > 24) {
         user_input_hour = 0
         user_input_min = 0
         user_input_sec = 0
      }
      window.alert("Your time is "+ user_input_hour + "h" + user_input_min + "m" + user_input_sec + "s")

      var one_second_later = (parseInt(user_input_sec)+1)
      if (one_second_later > 59) {
         one_second_later = 0
         user_input_min++
      }
      if (user_input_min > 59) {
         user_input_min = 0
         user_input_hour++
      }
      if (user_input_hour > 23) {
         user_input_hour = 0
         user_input_min = 0
         one_second_later = 0
      }
      window.alert("1 second after your time is "+ user_input_hour + "h" + user_input_min + "m" + one_second_later + "s")

   }
   else {
      window.alert("Sorry, you gave an invalid entry. Please enter whole numbers only.") 
   }

}
else {
   window.alert("Sorry, you gave an invalid entry.") 
}

window.location.href = "../index.html";