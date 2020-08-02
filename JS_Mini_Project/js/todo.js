console.log("Todo List");

const button = document.querySelector('#btn');
const list = document.querySelector('#list');
button.onclick = function(){
    let item = document.querySelector("#todo").value;
    let text = document.createTextNode(item);
    let listItem = document.createElement('li');
    listItem.appendChild(text);
    list.appendChild(listItem);
    document.forms.myForm.reset();
      localStorage.setItem('list',item);
}

// let empName='john';
// localStorage.setItem('name',empName);

function remove() {
    var list = document.getElementById("list");
    list.removeChild(list.childNodes[0]);
  }
// button.addEventListener('click',function(){

// })