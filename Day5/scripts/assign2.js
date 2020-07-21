console.log("Day 5 Assignment 2 ");

/*Question 2: 
Create a Class User with properties as name, age & email. 
He can login and logout 
Create another class Moderator which has all the features of User, plus additional functionality to Add coins and remove coins. 
Create one more class Admin which has all the features of Moderator plus additional features like add a Course and delete a particular course for a us */

class User{

    constructor(name,age,email){

        this.name=name;
        this.age=age;
        this.email=email;
        this.luCoins = 0;
        this.courses = [];
    }
    login(){
         console.log(`The ${this.name} is  Logged In `);
          return this;
    }
     
    logout(){

        console.log(`The ${this.name} is  Logged out `);
        return this;
    }
    addCoins(){
        this.luCoins++;
        console.log(`${this.name} has ${this.luCoins} coins`);
        return this;

  }

  removeCoins(){
    this.luCoins--;
    console.log(`${this.name} has ${this.luCoins} coins`);
    return this;

  }

}
class Moderator extends User{
    constructor(name,age,email,role){
        super(name,age,email);
        this.role = role;

}
}
class Admin extends Moderator{
    addCourse(user,course){
        user.courses.push(course);
        console.log(user);
    }
    deleteCourse(user,course){
        user.courses.pop(course);
        console.log(user);
    }
  
}

let user1 = new User('abhinay',25,'abhinay@gmail.com');
let user2=new User('preetham',19,'preetham@gmail.com');
let mod = new Moderator('sai',24,'sai@gmail.com','Moderator');
let admin = new Admin('Leo',25,'Leo@gmail.com');
let users = [user1,user2,mod,admin];
console.log(user1);
user1.login();
console.log(user2);
//add coins
user1.addCoins();
console.log(user1);
//remove coins
user1.removeCoins();
console.log(user1);
//add course
admin.addCourse(user1,'JavaScript');
admin.addCourse(user1,'python');
//delete course
admin.deleteCourse(user1,'python');









