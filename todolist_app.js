// import {v4 as uuidv4} from 'https://cdnjs.cloudflare.com/ajax/libs/uuid/8.3.2/uuid.min.js';

// console.log(uuidv4());

// const { v4: uuidv4 } = require('uuid');
// let uidCounter = uuidv4();
const inputBox = document.querySelector(".addnew input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".btn_clear"),
taskBox = document.querySelector(".task-box"),
ulBox = document.querySelector(".ultask");


let todoArray = JSON.parse(localStorage.getItem('todos')) || [] ;

console.log(todoArray);
// create li for Tasks
function showTodos (){
    const domTodo = todoArray.map((todo)=> {
    console.log(todo);
    return (
        `<li class="litask"> 
            <label>
                <input class="checked" type="checkbox" oninput="checkBox()">
                <p class="text"> ${todo.name} </p>
                <button onclick="deleteTask(${todo.id})"><i class="fa fa-close" style="font-size:24px"></i></button>
            </label>
        </li>`)
})
ulBox.innerHTML= domTodo.join(" ") ;
}

showTodos();

// create function for new task and put ins object then into arrye and save local storage

// let idCounter =1;
let idCounter = Math.floor(
    Math.random() * Math.floor(Math.random() * Date.now())
);
console.log(idCounter);
function addNewItems(value){
    
    // let idCounter = Date.now();
    let idCounter = Math.floor(
        Math.random() * Math.floor(Math.random() * Date.now())
    );
    console.log(`one ${idCounter}`);
    let userTask = inputBox.value.trim();
    let taskObject = {id:idCounter , name:userTask };
    if(userTask != ''){
        todoArray.push(taskObject);
        // idCounter = idCounter + 1;
        // console.log(todoArray);
        localStorage.setItem('todos', JSON.stringify(todoArray));
        showTodos();
        document.querySelector(".addnew input").value = "";
    }
    else 
        alert("Please Enter a Task");

    };

    // clear all tasks
function clearAllTask(){
    let clearTodos = JSON.parse(localStorage.getItem('todos'));
    clearTodos.splice(0, clearTodos.length);
    console.log(clearTodos);
    todoArray=clearTodos;
    localStorage.clear();
    todoArray=[];
    showTodos();
    // idCounter = 1;
    // console.log(idCounter);
}

// delete task
function deleteTask(todoId) {
    const filterArray = todoArray.filter( (todo) => todo.id != todoId );
    console.log(filterArray);
    todoArray=filterArray;
    localStorage.setItem('todos', JSON.stringify(todoArray));
    showTodos();
}

// check task
// function checkBox() {
//     const checkboxes = document.querySelector('litask');
//     checkboxes.addEventListener('click',)

// }
