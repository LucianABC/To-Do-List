try {
    const variables = require('./variables.js');
    const lista = variables.lista;
    const handleError = variables.handleError;
    const todo = variables.todo;
    const baseUrl = variables.baseUrl;

 } catch (e) {}

const todoUl = document.querySelector("#todo-list");

 const printList = () => {
    for (let todo of lista) {)
        let idSpan = document.createElement("span");
        let titleSpan = document.createElement("span");
        let userSpan = document.createElement("span");
        let statusSpan = document.createElement("span");

        idSpan.innerHTML = todo.id;
        idSpan.className = "todo-id";
        titleSpan.innerHTML=todo.title;
        titleSpan.className = "todo-title";
        userSpan.innerHTML=todo.userId;
        userSpan.className = "todo-user";
        statusSpan.innerHTML=todo.completed;
        statusSpan.className = "todo-completed";

        let deleteButton = document.createElement("button");
        deleteButton.className ="todo-delete";

        let li = document.createElement("li");
        li.className = "todo-item";

    }
 }