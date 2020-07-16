console.log("----------Assign2--------------")
//String methods 
var text="Let's upgrade is shining the people with great knowledge ";
//It extracts character from the String between(1,4)
//syntax: string.subString(start,end);
console.log(text.substring(1,4));
//It extracts character from the String between(1,10)
console.log(text.substring(1,10));

//split
//split is the method to slit the words what we specify the number in the method.
var address="Near FilmNagar Hyderabad ";
var add=address.split(" ",1);
console.log(add);

//replace
//It is used to replace the specific word what we specify in the method.
var education="am completed b.tech in IIT in khargpur";
var edu=education.replace("khargpur","Hyderabad");
console.log(edu);
//Array methods
//splice
//splice method() will replace the the index values with current  what we given in the method 
var cars=["BMW","Benz","Ferari","FORD","Lamborgini"];

 cars.splice(1,3,"Balneno","verna");

console.log(cars);
//indexof()  gives the index number
var bikes=["HolyDavidson","RoyalEnfield","Avengers","Apache"];
console.log(bikes.indexOf("HolyDavidson"));
//include() method returns true or false what we specify in the method
console.log(bikes.includes("Avengers",2));
console.log(bikes);
//Join method indicates that each index of the element join what we specify in the method
console.log(bikes.join("abhinay"));
console.log(bikes);


