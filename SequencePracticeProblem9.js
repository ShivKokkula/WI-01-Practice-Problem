switch (new Date().getDay()) {
    case 0:
        text = "Sunday";
        break;
    case 1:
        text = "Monday";
        break;
    case 2:
        text = "Tuesday";
        break;
    case 3:
        text = "Wednesday";
        break;
    case 4:
        text = "Thursday";
        break; 
    case 5:
        text = "Friday";
        break;  
    default:
        text = "Invalid day";
        break;
}

console.log(text);