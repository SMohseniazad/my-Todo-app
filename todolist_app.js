const inputBox = document.querySelector(".addnew input"),
filters = document.querySelectorAll(".filters span"),
clearAll = document.querySelector(".btn_clear"),
taskBox = document.querySelector(".task-box"),
ulBox = document.querySelector(".ultask");
showTodos ();
function addNewItems(value){
    
    let userTask = inputBox.value.trim();
    if(userTask != ''){
            ulBox.innerHTML += `
            <li class="litask"> 
                <label>
                    <input type="checkbox"  >
                    <p class="text">${userTask}</p>
                    <span class='delete'><i class="fa fa-close" style="font-size:24px"></i></span>
                </label>
            </li>
            `;
            console.log(userTask);
            saveTodo(userTask);
            document.querySelector(".addnew input").value = "";

    }else   
            alert("Please Enter a Task");
    };
function clearAllTask(){
    let clear_tasks = document.querySelectorAll(".litask");
    for(var i=0; i<clear_tasks.length; i++){
        clear_tasks[i].remove();
        localStorage.clear();

        //console.log(clear_tasks[i]);
        }
}
function getTodos(){
    var todosString = localStorage.getItem('todos');
    return todosString ? JSON.parse(todosString) : [];
}
function savaTodos(todos){
    localStorage.setItem('todos', JSON.stringify(todos));
}
function saveTodo(value){
    var todos = getTodos();
    todos.push(value);
    savaTodos(todos);
}
function showTodos (todos){
    let previousTodos = getTodos();
    previousTodos.forEach(function(previousTodos){
        if(previousTodos != ''){
        ulBox.innerHTML += `
        <li class="litask"> 
            <label>
                <input type="checkbox"  >
                <p class="text">${previousTodos}</p>
                <span class='delete'><i class="fa fa-close" style="font-size:24px"></i></span>
            </label>
        </li>
    `;
    console.log(previousTodos);
    }
    else
    addNewItems(value);
    });

}
