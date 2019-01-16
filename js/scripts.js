var add = function(num1, num2){
	return num1 + num2;
}

function add (num1, num2){
	return num1 + num2;
}

function subtract(num1, num2){
	return num1 - num2;
}

function multiply (num1, num2){
	return num1 * num2;
}

function divide (num1, num2){
	return num1 / num2;
}

var num1 = parseInt(prompt("Enter a Number"));
var num2 = parseInt(prompt("Enter a second number"));

result = add(num1, num2);
result4 = subtract(num1, num2);
result2 = multiply(num1, num2);
result3 = divide(num1, num2);

// alert(result);
// alert(result4);
// alert(result2);
// alert(result3);


alert("Addition: " + result + " Subtract: " + result4 + " Multiply: " + result2 + " Divide: " + result3);
