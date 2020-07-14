var a={name:"abhinay",age:24,city:"hyderabad"};

var b={name:"bunny",age:19,city:"hyderabad"};
var c={name:"sunny",age:29,city:"mumbai"};








//this the method to process the time to be taken 
console.time("Time taken");
//Console.log method is used to print message in the console  in browser developer tool
console.log("prints log Message in the console");
//Console.warn method is used to print "warning " message in the console  in browser developer tool
console.warn("This is warn message");
//Console.error method is used to print "error" message in the console  in browser developer tool
console.error("This is error message");
//Console.time method is used to print "time taken " message in the console  in brower developer tool


console.log({a,b,c});
//end of the time taken displayed in the console
console.timeEnd("Time taken")
//it prints in table format
console.table({a,b,c});