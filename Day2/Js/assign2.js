var name="abhinay";
var age=30;


{
  let name="sharma";
  let age=40; 
  console.log(name); //prints message locally because there is block and keyword let
  console.log(age);//prints message locally because there is block and keyword let
}
console.log(name);//prints globally declared value in the console
console.log(age);//prints globally declared value in the console

//for global access we need "var" keyword
//for local  access we need "let" keyword