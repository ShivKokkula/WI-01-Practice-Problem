const prompt = require('prompt-sync')();
const a = prompt('Enter a first number:');
const b = prompt('Enter a second number:');
const c = prompt('Enter a third number:');

result1 = a + b * c;
result2 = a % b + c;
result3 = c + a / b;
result4 = a * b + c;

let max = Math.max(result1,result2,result3,result4);
let min = Math.min(result1,result2,result3,result4);

console.log("result1 =" + result1+ " result2 =" + result2+ " result3 =" + result3+ " result4 =" + result4);
console.log("Maximum of 4 numbers is: " + max);
console.log("Minimum of 4 numbers is : " + min);
