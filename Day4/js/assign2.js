console.log("Day 4 assignment 2");
const student={
name:'Helsiniki',
age:24,
projects:{

    diceGame:"Two players Dice game using JS"
}
}
console.log(student);
//using deconstructing
const {name , age , projects:{diceGame}} = student;

console.log(student);