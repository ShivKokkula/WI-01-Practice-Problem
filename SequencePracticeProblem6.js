Number1 = (Math.floor(Math.random() * 1000));
Number2 = (Math.floor(Math.random() * 1000));
Number3 = (Math.floor(Math.random() * 1000));
Number4 = (Math.floor(Math.random() * 1000));
Number5 = (Math.floor(Math.random() * 1000));

console.log("Number 1: " + Number1 + " Number 2: " + Number2 + " Number 3: " + Number3 + " Number 4: " + Number4
+ " Number 5: " + Number5);

let max = 0;
let min = 0;

if (Number1 > Number2 && Number1 > Number3 && Number1 > Number4 && Number1 > Number5 ) {
    max = Number1;
}else if(Number2 > Number1 && Number2 > Number3 && Number2 > Number4 && Number2 > Number5 ){
    max = Number2;
}else if(Number3 > Number1 && Number3 > Number2 && Number3 > Number4 && Number3 > Number5 ){
    max = Number3;
}else if(Number4 > Number1 && Number4 > Number2 && Number4 > Number3 && Number4 > Number5 ){
    max = Number4;
}else if(Number5 > Number1 && Number5 > Number2 && Number5 > Number3 && Number5 > Number4 ){
    max = Number5;
}

if (Number1 < Number2 && Number1 < Number3 && Number1 < Number4 && Number1 < Number5 ) {
    min = Number1;
}else if(Number2 < Number1 && Number2 < Number3 && Number2 < Number4 && Number2 < Number5 ){
    min = Number2;
}else if(Number3 < Number1 && Number3 < Number2 && Number3 < Number4 && Number3 < Number5 ){
    min = Number3;
}else if(Number4 < Number1 && Number4 < Number2 && Number4 < Number3 && Number4 < Number5 ){
    min = Number4;
}else if(Number5 < Number1 && Number5 < Number2 && Number5 < Number3 && Number5 < Number4 ){
    min = Number5;
}

console.log("Maximum of 5 numbers is: " + max + " Minimum of 5 numbers is: " + min);


