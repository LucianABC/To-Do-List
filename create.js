
try {
    const variables = require('./variables.js');
    const lista = variables.lista;
    const handleError = variables.handleError;
    const todo = variables.todo;
    const baseUrl = variables.baseUrl;
    const todoUl = variables.todoUl;

    const printlistjs = require('./printlist.js');
    const printList = printlistjs.printList;
    const getTodos = printlistjs.getTodos;

 } catch (e) {}

const newTitleInput = document.querySelector("#todo-title-create");
const newUserInput = document.querySelector("#todo-user-create");
let title = newTitleInput.value;
let user = newUserInput.value;

const add2list = (newTodo) => {
    let toDo = newTodo;
    
    let idSpan = document.createElement("span");
    let titleSpan = document.createElement("span");
    let userSpan = document.createElement("span");
    let statusSpan = document.createElement("span");

    idSpan.innerHTML = toDo.id;
    idSpan.className = "todo-id";
    titleSpan.innerHTML=toDo.title;
    titleSpan.className = "todo-title";
    userSpan.innerHTML=toDo.userId;
    userSpan.className = "todo-user";
    statusSpan.innerHTML=toDo.completed;
    statusSpan.className = "todo-completed";

    let deleteButton = document.createElement("button");
    deleteButton.className ="todo-delete";
    deleteButton.innerHTML = "Eliminar";
    deleteButton.addEventListener("click",()=>{
        let li = deleteButton.parentElement;
        li.parentNode.removeChild(li);
        deleteTodo(toDo.id);
    });

    let li = document.createElement("li");
    li.className = "todo-item";
    li.appendChild(idSpan);
    li.appendChild(titleSpan);
    li.appendChild(userSpan);
    li.appendChild(statusSpan);
    li.appendChild(deleteButton);

    todoUl.appendChild(li);
}

const createTodo = (title, userId) => {
    let data = {
        title,
        userId,
        completed: false
    }
    axios.post(baseUrl, data)
        .then(res => {
            lista.push(res.data);
            add2list(res.data);
            
        })
        .catch(handleError);
};

const addButton = document.querySelector("#todo-create");
//addButton.addEventListener("click", createTodo(title,user));
addButton.addEventListener("click", getTodos);
