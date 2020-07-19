console.log("assignment 4");


// function add(num1,num2){

//     return num1+num2;
// }

// let addition=add(10,20);
// console.log(addition);

let add=(num1,num2)=>num1+num2;
let sub=(num1,num2)=>num1-num2;
let mul=(num1,num2)=>num1*num2;
let div=(num1,num2)=>num1/num2;
let per=(num1,num2)=>num1*num2/100;

let addition=add(10,20);
console.log(`addition::${addition}`);
let substraction=sub(10,20);
console.log(`substraction::${substraction}`);
let Multiplication=mul(10,20);
console.log(`Multiplication::${Multiplication}`);
let Division=div(10,20);
console.log(`Division::${Division}`);
let percentage=per(10,20);
console.log(`Percentage::${percentage}`);
console.log("SqaureRoot::"+Math.sqrt(100));
