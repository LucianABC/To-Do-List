try {
    const variables = require('./variables.js');
    const lista = variables.lista;
    const handleError = variables.handleError;
    const todo = variables.todo;
    const baseUrl = variables.baseUrl;
    const todoUl =variables.todoUl;
    const deleteJs = require('./delete.js');
    const deleteTodo = deleteJs.deleteTodo;
} catch (e) {}



const printList = () => {
    for (let todo of lista) {
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
        deleteButton.innerHTML="Eliminar";
        deleteButton.addEventListener("click",()=>{
            let li = deleteButton.parentElement;
            li.parentNode.removeChild(li);
            deleteTodo(todo.id);
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
}


const getTodos = () =>{
    axios.get(baseUrl)
        .then(res => {
            lista = res.data;
            printList();
        })
        .catch(handleError);
};


try {
    module.exports = {
       getTodos,
        printList
    }
 } catch (e) {}