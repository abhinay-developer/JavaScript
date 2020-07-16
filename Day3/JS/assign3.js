console.log("---------------assign3---------------");


function printsGrade(num) {
    num = Number(prompt("Enter your number"));

if(num>=60){
console.log(`Marks are ${num} and grade is A `);
}
else if(num<=60&&num>=50){
console.log(`Marks are ${num} and Grade is B `);
}
else if(num<50&&num>=35){
    console.log(`Marks are ${num} and Grade is C `);
    }
else{
    console.log("You are Failed No Grade ");
}
}
printsGrade();


