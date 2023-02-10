/* Q6
Multiplication Table (use loop) - The program has the following requirements:
Input
A number (assume valid input)
Output
The multiplication table for the input number multiplied by 0 – 10.  For example, assume 3 
is entered:
3 x 0 = 0
3 x 1 = 3
3 x 2 = 6
3 x 3 = 9
3 x 4 = 12
3 x 5 = 15
3 x 6 = 18
3 x 7 = 21
3 x 8 = 24
3 x 9 = 27
3 x 10 = 30
*/
var user_input_number = prompt("Please enter a valid number")
if (!isNaN(user_input_number)) {
   window.alert("Here is a multiplication table for your number (" + user_input_number + ").\n" + 
   user_input_number + " x 0 = " + (parseInt(user_input_number)*0) + "\n" +
   user_input_number + " x 1 = " + (parseInt(user_input_number)*1) + "\n" +
   user_input_number + " x 2 = " + (parseInt(user_input_number)*2) + "\n" +
   user_input_number + " x 3 = " + (parseInt(user_input_number)*3) + "\n" +
   user_input_number + " x 4 = " + (parseInt(user_input_number)*4) + "\n" +
   user_input_number + " x 5 = " + (parseInt(user_input_number)*5) + "\n" +
   user_input_number + " x 6 = " + (parseInt(user_input_number)*6) + "\n" +
   user_input_number + " x 7 = " + (parseInt(user_input_number)*7) + "\n" +
   user_input_number + " x 8 = " + (parseInt(user_input_number)*8) + "\n" +
   user_input_number + " x 9 = " + (parseInt(user_input_number)*9) + "\n" +
   user_input_number + " x 10 = " + (parseInt(user_input_number)*10)
   )
}
else {
   window.alert("Sorry, " + user_input_number + " is not a valid entry.") 
}
window.location.href = "../index.html";