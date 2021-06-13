const prompt = require('prompt-sync')();
const year = prompt('Enter the year:');

if ((year % 4 === 0 || year % 400 === 0) && year % 100 !== 0) {
    console.log("Entered year is leap year");
}else{
    console.log("Entered year is not leap year");
}