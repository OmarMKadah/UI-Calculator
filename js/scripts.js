// Below is the Back-End Logic for the calculator:

var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};


// result = add(num1, num2);
// result4 = subtract(num1, num2);
// result2 = multiply(num1, num2);
// result3 = divide(num1, num2);

// alert(result);
// alert(result4);
// alert(result2);
// alert(result3);

// The below was an alert for previous assignment
// alert("Addition: " + result + " Subtract: " + result4 + " Multiply: " + result2 + " Divide: " + result3);

// Code below is for front end logic (User-Interace Logic):

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
