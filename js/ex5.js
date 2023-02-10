/* Q5
Password (use loop) - The program has the following requirements:
Input
A password
Output
Assume password is "secret"
If "secret" is not entered, prompt the user for a password again (up to 3 times)
If a correct password is entered, display the following message (# represents number of 
attempts):
You entered the correct password after # attempt(s)
If after three attempts, the user fails to enter the correct password, display the following 
message:
Your account is locked!  You failed to enter the correct password # times
Note:  You can hard code three for failure, but if you need to change this in the future, it's 
more difficult.
*/
var _attempts_made = 0
var _password_is_solved = false
while (_attempts_made >= 0 &&_attempts_made < 3 && _password_is_solved == false) {
   var user_input_password = prompt("Please enter the secret password: ");
   if (user_input_password != "secret") {
      _attempts_made = parseInt(_attempts_made) + 1;
      window.alert("The password you entered is incorrect. You have " + (3 - parseInt(_attempts_made)) + " attempts remaining.")
   }
   else {
      _password_is_solved = true;
   }
}
if (_password_is_solved == false) {
   window.alert("Your account is locked!  You failed to enter the correct password after " + _attempts_made +" attempt(s).")
}
else {
   window.alert("You entered the correct password after " + (parseInt(_attempts_made)+1) +" attempt(s).");
}


window.location.href = "../index.html";