
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

const createTodo = event => {
    newTitle = document.querySelector("#todo-title-create").value;
    newUser = document.querySelector("#todo-user-create").value;
    let data = {
        title: newTitle,
        userId: newUser,
        completed: false
    }
    axios.post(baseUrl, data)
        .then(res => {
            lista.push(res.data);
            printList();
            //pushea algo vacio.
        })
        .catch(handleError);
};

const addButton = document.querySelector("#todo-create");
addButton.addEventListener("click", createTodo);

