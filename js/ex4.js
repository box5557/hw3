/* Q4

The following mathematical operations for the numbers entered
 Addition (e.g. num1 + num2 = sum; 3 + 4 = 7)
 Subtraction
 Multiplication
 Division
 Modulo
*/
var user_input_num_1 = prompt("Please enter your first number");
var user_input_num_2 = prompt("Please enter your second number");
if (!isNaN(user_input_num_1) && !isNaN(user_input_num_2)) {
   if (user_input_num_1 % 1 == 0 && user_input_num_2 % 1 == 0) {
      var _addition, _subtraction, _multiplication, _division, _modulo;
      _addition = parseInt(user_input_num_1) + parseInt(user_input_num_2);
      _subtraction = parseInt(user_input_num_1) - parseInt(user_input_num_2);
      _multiplication = parseInt(user_input_num_1) * parseInt(user_input_num_2);
      _division = parseInt(user_input_num_1) / parseInt(user_input_num_2);
      _modulo = parseInt(user_input_num_1) % parseInt(user_input_num_2);


      window.alert(
         "Addition: " + user_input_num_1 + " + " + user_input_num_2 + " = " + _addition +
         "\nSubtraction: " + user_input_num_1 + " - " + user_input_num_2 + " = " + _subtraction +
         "\nMultiplication: " + user_input_num_1 + " x " + user_input_num_2 + " = " + _multiplication +
         "\nDivision: " + user_input_num_1 + " / " + user_input_num_2 + " = " + _division +
         "\nModulo: " +  user_input_num_1 + " % " + user_input_num_2 + " = " + _modulo
      )
   }
}
else {
   window.alert("You entered an invalid input");
}


window.location.href = "../index.html";