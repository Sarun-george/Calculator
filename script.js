let num1;
let num2;

const add = function(num1,num2){
  return num1 + num2;
}

const subtract = function(num1, num2) {
	return num1 - num2;
};

// const multiply = function(numbers) {
// let multiply = 1; 
// numbers.forEach((n) => {
//   multiply *= n;
// });
// return multiply;
// };

const divide = function(num1, num2) {
    return num1 / num2;
}
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
module.exports = {
  add,
  subtract,
//   sum,
  multiply,
//   power,
//   factorial
};
