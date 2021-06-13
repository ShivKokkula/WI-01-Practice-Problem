const prompt = require('prompt-sync')();
const number = prompt('Enter a single digit number:');

let text;
switch (Number(number)) {
    case 0:
        text = "Zero";
        break;
    case 1:
        text = "One";
        break;
    case 2:
        text = "Two";
        break;
    case 3:
        text = "Three";
        break;
    case 4:
        text = "Four";
        break;
    case 5:
        text = "Five";
        break;
    case 6:
        text = "Six";
        break;
    case 7:
        text = "Seven";
        break;
    case 8:
        text = "Eight";
        break;
    case 9:
        text = "Nine";
        break;
    default:
        text = "Invalid";
        break;
}

console.log("You entered "+number +" in words is "+ text);