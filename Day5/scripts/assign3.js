console.log("Assignment 3");


fetch('https://jsonplaceholder.typicode.com/posts')
.then(response=>response.json())
.then(data=>console.log(data))

let obj = {
    userId:2,
    title:"Books",
    body:'Java Language',
}
console.log(obj);