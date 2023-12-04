const inputBox = document.querySelector(".addnew input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".btn_clear"),
taskBox = document.querySelector(".task-box"),
ulBox = document.querySelector(".ultask");

let todoArray = JSON.parse(localStorage.getItem('todos')) || [] ;
console.log(todoArray);
// create li for Tasks
function showTodos (filterType){
    let filteredTodos = todoArray;
    if(filterType === "completed"){
        filteredTodos = todoArray.filter(todo => todo.status === "completed");
    } else if(filterType === "pending"){
        filteredTodos = todoArray.filter(todo => todo.status === "pending");
    }
    const domTodo = filteredTodos.map((todo, id)=> { 
        let isCompleted = todo.status == "completed" ? "checked" : "";
    console.log(todo);
    return (
        `<li class="litask"> 
            <label for="${id}">
                <input onclick="updateStatus(this)" type="checkbox" id="${id}" ${isCompleted}>
                <p class="${isCompleted}">${todo.name}</p>
                <button onclick="deleteTask(${todo.id})"><i class="fa fa-close" style="font-size:24px"></i></button>
            </label>
        </li>`)
}); 
    ulBox.innerHTML= domTodo.join(" ");  
}

showTodos();

// update status of todo list 
function updateStatus(selectedTask) {

    let taskName = selectedTask.parentElement.lastElementChild;
    console.log(taskName);

    if(selectedTask.checked ) {
        console.log(selectedTask.checked);
        taskName.classList.add("checked");
        todoArray[selectedTask.id].status = "completed";

    } else {
        taskName.classList.remove("checked");
        todoArray[selectedTask.id].status = "pending";
    }
    localStorage.setItem("todos", JSON.stringify(todoArray));
    showTodos();

}
// create function for new task and put ins object then into arrye and save local storage
function addNewItems(value){
    
    let idCounter = Math.floor(
        Math.random() * Math.floor(Math.random() * Date.now())
    );
    // console.log(`one ${idCounter}`);

    let userTask = inputBox.value.trim();
    let taskObject = {id:idCounter , name:userTask , status:"pending"};
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

