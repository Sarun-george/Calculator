// global variables to store current input, second input, and operator

let currentInput = "";
let firstInput = "";
let operator = "";

// Get the display element and buttons

// Number buttons
const caldisplay = document.getElementById("display");
const ninebtn = document.getElementById("9");
const eightbtn = document.getElementById("8");
const sevenbtn = document.getElementById("7");
const sixbtn = document.getElementById("6");
const fivebtn = document.getElementById("5");
const fourbtn = document.getElementById("4");
const threebtn = document.getElementById("3");
const twobtn = document.getElementById("2");
const onebtn = document.getElementById("1");
const zerobtn = document.getElementById("0");

// Operator buttons
const addbtn = document.getElementById("add");
const subtractbtn = document.getElementById("subtract");
const multiplybtn = document.getElementById("multiply");
const dividebtn = document.getElementById("divide");
const equalbtn = document.getElementById("equals");
const clearbtn = document.getElementById("clear");
const clearEntrybtn = document.getElementById("clearEntry");


// Add event listeners to number buttons

ninebtn.addEventListener("click", function() {
  currentInput += ninebtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput);
});

eightbtn.addEventListener("click", function() {
  currentInput += eightbtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput);
});

sevenbtn.addEventListener("click", function() {
  currentInput += sevenbtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput);
});

sixbtn.addEventListener("click", function() {
  currentInput += sixbtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput);
});

fivebtn.addEventListener("click", function() {
  currentInput += fivebtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput  );
});

fourbtn.addEventListener("click", function() {
  currentInput += fourbtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput);
});

threebtn.addEventListener("click", function() {
  currentInput += threebtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput);
});

twobtn.addEventListener("click", function() {
  currentInput += twobtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput);
});

onebtn.addEventListener("click", function() {
  currentInput += onebtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput);
});

zerobtn.addEventListener("click", function() {
  currentInput += zerobtn.value;
  caldisplay.textContent = currentInput;
  console.log(currentInput);
});

clearbtn.addEventListener("click", function() {
  caldisplay.textContent = "";
  currentInput = "";
  operator = null;
});

clearEntry.addEventListener("click", function() {
  caldisplay.textContent = caldisplay.textContent.slice(0, -1);
});


// Add event listeners to operator buttons

addbtn.addEventListener("click", function() {
    operator = addbtn.value;
    firstInput = currentInput;
    currentInput = "";
    // caldisplay.textContent += operator;
});

subtractbtn.addEventListener("click", function() {
    operator = subtractbtn.value;
    firstInput = currentInput;
    currentInput = "";
});

multiplybtn.addEventListener("click", function() {
  operator = multiplybtn.value;
  firstInput = currentInput;
  currentInput = "";
});

dividebtn.addEventListener("click", function() {
  operator = dividebtn.value;
  firstInput = currentInput;
  currentInput = "";
});

equalbtn.addEventListener("click", function() {
let result;
    if (operator === "+") {
      result = Number(firstInput) + Number(currentInput);
    }
    if (operator === "-") {
      result = Number(firstInput) - Number(currentInput);
    }
    if (operator === "*") {
      result = Number(firstInput) * Number(currentInput);
    }
    if (operator === "/") {
      result = Number(firstInput) / Number(currentInput);
    }
    caldisplay.textContent = result;
});

// Define calculator functions

// const add = function(num1,num2){
//   return num1 + num2;
// }

// const subtract = function(num1, num2) {
// 	return num1 - num2;
// };

// const multiply = function(numbers) {
// let multiply = 1; 
// numbers.forEach((n) => {
//   multiply *= n;
// });
// return multiply;
// };

// const divide = function(num1, num2) {
//     return num1 / num2;
// }
// const sum = function(numbers) {
//   let sum = 0;
//   numbers.forEach((n) => {
//     sum += n;
//   });
//   return sum;
// };

// const power = function(base,exponent) {
// 	let power = 1;
//   power = base ** exponent;
//   return power;
// };

// const factorial = function(num) {
//   let result = 1;
//   for (let i = 1; i <=num; i++) {
//     result = result * i;
//   }
//   return result;
// };

// Do not edit below this line
// module.exports = {
//   add,
//   subtract,
//   sum,
//   multiply,
//   power,
//   factorial
// };
